OSBService.preCreate = function() {
	this.setFieldValue("osbSrvUUID", Tool.randomUUID());
};