OSBService.postLoad = function() {
	if (!this.getGrant().hasResponsibility("OSB_ADMIN"))
		this.setDefaultSearchSpec("t." + this.getField("osbSrvActive").getColumn() + " = '" + Tool.TRUE + "'");
};

OSBService.preSave = function() {
	var f = this.getField("osbSrvUUID");
	if (f.isEmpty()) f.setValue(Tool.randomUUID());
};