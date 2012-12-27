var Document = ace.require('ace/document').Document;

function File (path, content) {
	this._path = path;
	this._document = new Document(content);
}

(function () {
	this.getPath = function () {
		return this._path;
	};

	this.getDocument = function() {
		return this._document;
	};
}).call(File.prototype);

module.exports = File;
