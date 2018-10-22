/**
 * Open Service Broker services
 */
osb.display = function(params) {
	this.setJSONMIMEType();
	
	try {
		var g =this.getGrant(), method = params.getMethod(), debug = false;
	
		var parts = params.getURIParts();
		while (parts.get(0) != this.getName()) parts.remove(0);
		parts.remove(0); // removes external object name
		
		if (!parts.size())
			return osb.error.call(this, 400, "No version");
		if (parts.get(0)!="v2")
			return osb.error.call(this, 404, "Unhandled version " + parts.get(0));
		if (debug) console.log("Version: " + parts.get(0));
		parts.remove(0);
		
		if (!parts.size())
			return osb.error.call(this, 400, "No operation");
		var operation = parts.get(0);
		parts.remove(0);
		if (debug) console.log("Operation: " + operation);

		var instanceID, bindingID;
		if (method=="GET" && operation=="catalog") {
			var srv = g.getTmpObject("OSBService");
			var srvt = new BusinessObjectTool(srv);
			var pln = g.getTmpObject("OSBPlan");
			var plnt = new BusinessObjectTool(pln);
			var s = new JSONArray();
			srv.resetFilters();
			var rss = srvt.search();
			for (var i = 0; i < rss.size(); i++) {
				var rs = rss.get(i);
				var sv = new JSONObject()
					.put("id", srv.getFieldValue("osbSrvUUID", rs))
					.put("name", srv.getFieldValue("osbSrvName", rs))
					.put("description", srv.getFieldValue("osbSrvShortDescription", rs))
					.put("bindable", srv.getFieldValue("osbSrvBindable", rs)==Tool.TRUE)
					.put("plan_updatable", srv.getFieldValue("osbSrvPlanUpdatable", rs)==Tool.TRUE)
					.put("metadata", new JSONObject()
						.put("displayName", srv.getFieldValue("osbSrvShortDescription", rs))
						.put("longDescription", srv.getFieldValue("osbSrvLongDescription", rs))
						.put("providerDisplayName", g.getParameter("OSB_PROVIDER", "Simplicite Software"))
						.put("documentationUrl", srv.getFieldValue("osbSrvDocumentationURL", rs))
						.put("instructionsUrl", srv.getFieldValue("osbSrvInstructionsURL", rs))
						.put("supportUrl", srv.getFieldValue("osbSrvSupportURL", rs))
						.put("termsUrl", srv.getFieldValue("osbSrvTermsURL", rs))
					);
				var tags = srv.getFieldValue("osbSrvTags", rs);
				if (!Tool.isEmpty(tags))
					sv.put("tags", new JSONArray(tags.split(",")));
				var p = new JSONArray();
				pln.resetFilters();
				pln.getField("osbPlnSrvId").setFilter(rs[0]);
				var rps = plnt.search();
				if (rps.size()) {
					for (var j = 0; j < rps.size(); j++) {
						var rp = rps.get(j);
						p.put(new JSONObject()
							.put("id", pln.getFieldValue("osbPlnUUID", rp))
							.put("name", pln.getFieldValue("osbPlnName", rp))
							.put("description", pln.getFieldValue("osbPlnLongDescription", rp))
							.put("free", pln.getFieldValue("osbPlnFree", rp)==Tool.TRUE)
							.put("metadata", new JSONObject()
								.put("displayName", pln.getFieldValue("osbPlnShortDescription", rp))
							)
						);
					}
					sv.put("plans", p);
				}
				console.log(p.toString());
				s.put(sv);
			}
			return new JSONObject().put("services", s).toString(2);
		} else if ((method=="PUT" || method=="DELETE") && operation=="service_instances") {
			if (!parts.size())
				return osb.error.call(this, 400, "No service instance ID for operation " + operation);
			instanceID = parts.get(0);
			console.log("Instance ID = " + instanceID);
			parts.remove(0);
			if (parts.size() && parts.get(0)=="service_bindings") {
				parts.remove(0);
				if (!parts.size())
					return osb.error.call(this, 400, "No binding ID for service instance ID " + instanceID + " and operation " + operation);
				bindingID = parts.get(0);
				console.log("Binding ID = " + instanceID);
				parts.remove(0);
				if (method=="DELETE") {
					console.log("TODO: delete binding " + bindingID + " for insance " + instanceID);
					return JSONObject().put("description", "Deleted binding " + bindingID + " for service instance " + instanceID);
				} else { // PUT
					console.log("TODO: create/update binding " + bindingID + " for service instance " + instanceID);
					var req = params.getJSONObject();
					console.log(req);
					return new JSONObject().put("request", req);
				}
				console.log("TODO: binding/" + method);				
			} else {
				if (method=="DELETE") {
					console.log("TODO: delete instance " + instanceID);
					return JSONObject().put("description", "Deleted service instance " + instanceID);
				} else { // PUT
					console.log("TODO: create/update instance " + instanceID);
					req = params.getJSONObject();
					console.log(req);
					return new JSONObject().put("request", req);
				}
			}
		} else
			return osb.error.call(this, 404, "Unknown operation " + operation + " for method " + method);
	} catch(e) {
		console.error(e);
		return osb.error.call(this, 500, e.message);
	}
};

osb.error = function(status, desc) {
	this.setHTTPStatus(status);
	return new JSONObject().put("description", desc);
};