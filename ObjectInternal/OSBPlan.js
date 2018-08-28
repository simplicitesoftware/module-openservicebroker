OSBPlan.postLoad = function() {
	if (!this.getGrant().hasResponsibility("OSB_ADMIN"))
		this.setDefaultSearchSpec("t." + this.getField("osbPlnActive").getColumn() + " = '" + Tool.TRUE + "'");
};

OSBPlan.preSave = function() {
	var f = this.getField("osbPlnUUID");
	if (f.isEmpty()) f.setValue(Tool.randomUUID());
};