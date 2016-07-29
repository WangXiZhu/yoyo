export default class Unicoder{
  constructor(){
    this.result = '';
  }
  Native2Unicode(param) {
    this.result = '';
  	if ('' === param) {
      	return param;
  	}
  	for (var i=0; i<$("#a_source").val().length; i++)
  		this.result += ('&#' + a_s.charCodeAt(i) + ';');
    return this.result;
  }

  Unicode2Native(param) {
    this.result = '';
  	var code = param.match(/&#(\d+);/g);
  	if (code === null) {
      	return param;
  	}
  	for (var i=0; i<code.length; i++)
  		this.result += String.fromCharCode(code[i].replace(/[&#;]/g, ''));
    return this.result;
  }
}
