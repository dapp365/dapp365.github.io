window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		t.visible = false;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.visible = false;
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gShowCpuSkin.exml'] = window.gShowCpuSkin = (function (_super) {
	__extends(gShowCpuSkin, _super);
	function gShowCpuSkin() {
		_super.call(this);
		this.skinParts = ["_img_cpu","_img_net","_mask_cpu","_mask_net","_percen_cpu","_percen_net","_wind"];
		
		this.height = 188;
		this.width = 424;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gShowCpuSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._img_cpu_i(),this._img_net_i(),this._mask_cpu_i(),this._mask_net_i(),this._Label1_i(),this._percen_cpu_i(),this._Label2_i(),this._percen_net_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Rplist1_json.img_plist1_img25";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "Rplist1_json.img_plist1_img23";
		t.x = 61;
		t.y = 49;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "Rplist1_json.img_plist1_img23";
		t.x = 201;
		t.y = 49;
		return t;
	};
	_proto._img_cpu_i = function () {
		var t = new eui.Image();
		this._img_cpu = t;
		t.source = "Rplist1_json.img_plist1_img21";
		t.x = 61;
		t.y = 49;
		return t;
	};
	_proto._img_net_i = function () {
		var t = new eui.Image();
		this._img_net = t;
		t.source = "Rplist1_json.img_plist1_img22";
		t.x = 201;
		t.y = 49;
		return t;
	};
	_proto._mask_cpu_i = function () {
		var t = new eui.Rect();
		this._mask_cpu = t;
		t.anchorOffsetY = 110;
		t.bottom = 29;
		t.height = 110;
		t.width = 110;
		t.x = 61;
		return t;
	};
	_proto._mask_net_i = function () {
		var t = new eui.Rect();
		this._mask_net = t;
		t.anchorOffsetY = 110;
		t.bottom = 29;
		t.height = 110;
		t.width = 110;
		t.x = 201;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 88;
		t.left = 86;
		t.size = 28;
		t.text = "CPU";
		return t;
	};
	_proto._percen_cpu_i = function () {
		var t = new eui.Label();
		this._percen_cpu = t;
		t.horizontalCenter = -95.5;
		t.size = 28;
		t.text = "70%";
		t.y = 105;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 89;
		t.left = 227;
		t.size = 28;
		t.text = "NET";
		return t;
	};
	_proto._percen_net_i = function () {
		var t = new eui.Label();
		this._percen_net = t;
		t.horizontalCenter = 43.5;
		t.size = 28;
		t.text = "70%";
		t.y = 105;
		return t;
	};
	return gShowCpuSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gShowMoneySkin.exml'] = window.gShowMoneySkin = (function (_super) {
	__extends(gShowMoneySkin, _super);
	function gShowMoneySkin() {
		_super.call(this);
		this.skinParts = ["_font_money","_wind"];
		
		this.height = 188;
		this.width = 437;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gShowMoneySkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._font_money_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Rplist1_json.img_plist1_img26";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._font_money_i = function () {
		var t = new eui.Label();
		this._font_money = t;
		t.horizontalCenter = 51;
		t.size = 36;
		t.text = "10000.1234 EOS";
		t.y = 81;
		return t;
	};
	return gShowMoneySkin;
})(eui.Skin);generateEUI.paths['resource/skin/btnSceneSkin.exml'] = window.btnSceneSkin = (function (_super) {
	__extends(btnSceneSkin, _super);
	var btnSceneSkin$Skin1 = 	(function (_super) {
		__extends(btnSceneSkin$Skin1, _super);
		function btnSceneSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist0_json.btn_plist0_question1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = btnSceneSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist0_json.btn_plist0_question0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return btnSceneSkin$Skin1;
	})(eui.Skin);

	var btnSceneSkin$Skin2 = 	(function (_super) {
		__extends(btnSceneSkin$Skin2, _super);
		function btnSceneSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist0_json.btn_plist0_more1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = btnSceneSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist0_json.btn_plist0_more0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return btnSceneSkin$Skin2;
	})(eui.Skin);

	var btnSceneSkin$Skin3 = 	(function (_super) {
		__extends(btnSceneSkin$Skin3, _super);
		function btnSceneSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist0_json.btn_plist0_login1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = btnSceneSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist0_json.btn_plist0_login0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return btnSceneSkin$Skin3;
	})(eui.Skin);

	var btnSceneSkin$Skin4 = 	(function (_super) {
		__extends(btnSceneSkin$Skin4, _super);
		function btnSceneSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist1_json.btn_plist1_zh1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = btnSceneSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist1_json.btn_plist1_zh0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return btnSceneSkin$Skin4;
	})(eui.Skin);

	var btnSceneSkin$Skin5 = 	(function (_super) {
		__extends(btnSceneSkin$Skin5, _super);
		function btnSceneSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist1_json.btn_plist1_en1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = btnSceneSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist1_json.btn_plist1_en0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return btnSceneSkin$Skin5;
	})(eui.Skin);

	function btnSceneSkin() {
		_super.call(this);
		this.skinParts = ["_btn_help","_btn_more","_UIGShowCpu","_UIGShowMoney","_gp_login","_btn_login","_btn_lang_zh","_btn_lang_en","_wind"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = btnSceneSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.elementsContent = [this._btn_help_i(),this._btn_more_i(),this._gp_login_i(),this._btn_login_i(),this._btn_lang_zh_i(),this._btn_lang_en_i()];
		return t;
	};
	_proto._btn_help_i = function () {
		var t = new eui.Button();
		this._btn_help = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 1;
		t.skinName = btnSceneSkin$Skin1;
		return t;
	};
	_proto._btn_more_i = function () {
		var t = new eui.Button();
		this._btn_more = t;
		t.label = "";
		t.x = 1840;
		t.y = 1;
		t.skinName = btnSceneSkin$Skin2;
		return t;
	};
	_proto._gp_login_i = function () {
		var t = new eui.Group();
		this._gp_login = t;
		t.touchEnabled = false;
		t.x = 0;
		t.y = 937;
		t.elementsContent = [this._UIGShowCpu_i(),this._UIGShowMoney_i()];
		return t;
	};
	_proto._UIGShowCpu_i = function () {
		var t = new UIGShowCpu();
		this._UIGShowCpu = t;
		t.skinName = "gShowCpuSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._UIGShowMoney_i = function () {
		var t = new UIGShowMoney();
		this._UIGShowMoney = t;
		t.skinName = "gShowMoneySkin";
		t.x = 1563;
		t.y = 0;
		return t;
	};
	_proto._btn_login_i = function () {
		var t = new eui.Button();
		this._btn_login = t;
		t.label = "";
		t.x = 1547;
		t.y = 940;
		t.skinName = btnSceneSkin$Skin3;
		return t;
	};
	_proto._btn_lang_zh_i = function () {
		var t = new eui.Button();
		this._btn_lang_zh = t;
		t.label = "";
		t.left = 1680;
		t.y = 1;
		t.skinName = btnSceneSkin$Skin4;
		return t;
	};
	_proto._btn_lang_en_i = function () {
		var t = new eui.Button();
		this._btn_lang_en = t;
		t.label = "";
		t.left = 1680;
		t.y = 1;
		t.skinName = btnSceneSkin$Skin5;
		return t;
	};
	return btnSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skin/fontTipsSkin.exml'] = window.fontTipsSkin = (function (_super) {
	__extends(fontTipsSkin, _super);
	function fontTipsSkin() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_font","_act","_wind"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = fontTipsSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.height = 1125;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 2000;
		t.elementsContent = [this._act_i()];
		return t;
	};
	_proto._act_i = function () {
		var t = new eui.Group();
		this._act = t;
		t.x = 764;
		t.y = 400;
		t.elementsContent = [this._rect_bg_i(),this._font_i()];
		return t;
	};
	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.ellipseHeight = 64;
		t.ellipseWidth = 64;
		t.height = 64;
		t.width = 473;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._font_i = function () {
		var t = new eui.Label();
		this._font = t;
		t.size = 40;
		t.text = "余额不足，无法下注";
		t.x = 56;
		t.y = 11;
		return t;
	};
	return fontTipsSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gWinListSkin.exml'] = window.gWinListSkin = (function (_super) {
	__extends(gWinListSkin, _super);
	function gWinListSkin() {
		_super.call(this);
		this.skinParts = ["_bg","_font_player","_font_area","_font_money","_scr_gp","_scr","_wind"];
		
		this.height = 1001;
		this.width = 660;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gWinListSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._bg_i(),this._font_player_i(),this._font_area_i(),this._font_money_i(),this._scr_i(),this._Rect1_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.height = 1050;
		t.scale9Grid = new egret.Rectangle(46,49,215,214);
		t.source = "Rplist0_json.img_plist0_resultBg0";
		t.width = 711;
		t.x = -26;
		t.y = -26;
		return t;
	};
	_proto._font_player_i = function () {
		var t = new eui.Label();
		this._font_player = t;
		t.horizontalCenter = -138;
		t.size = 36;
		t.text = "玩家";
		t.textColor = 0xe1b765;
		t.y = 47;
		return t;
	};
	_proto._font_area_i = function () {
		var t = new eui.Label();
		this._font_area = t;
		t.horizontalCenter = 47;
		t.size = 36;
		t.text = "区域";
		t.textColor = 0xe1b765;
		t.y = 47;
		return t;
	};
	_proto._font_money_i = function () {
		var t = new eui.Label();
		this._font_money = t;
		t.horizontalCenter = 215;
		t.size = 36;
		t.text = "金额";
		t.textColor = 0xE1B765;
		t.y = 47;
		return t;
	};
	_proto._scr_i = function () {
		var t = new eui.Scroller();
		this._scr = t;
		t.height = 849;
		t.left = 19;
		t.top = 122;
		t.width = 621;
		t.viewport = this._scr_gp_i();
		return t;
	};
	_proto._scr_gp_i = function () {
		var t = new eui.DataGroup();
		this._scr_gp = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.8;
		t.height = 40;
		t.width = 611;
		t.x = 28;
		t.y = 940;
		return t;
	};
	return gWinListSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gameSkin.exml'] = window.gameSkin = (function (_super) {
	__extends(gameSkin, _super);
	function gameSkin() {
		_super.call(this);
		this.skinParts = ["_bg","_scr_gp","_scr","_scr_gp_info","_scr_info","_UIGWinList","_mask","_wind"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gameSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._bg_i(),this._scr_info_i(),this._UIGWinList_i(),this._mask_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.source = "img_bg1_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._scr_info_i = function () {
		var t = new eui.Scroller();
		this._scr_info = t;
		t.bottom = 0;
		t.bounces = false;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "auto";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.viewport = this._scr_gp_info_i();
		return t;
	};
	_proto._scr_gp_info_i = function () {
		var t = new eui.Group();
		this._scr_gp_info = t;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._scr_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._scr_i = function () {
		var t = new eui.Scroller();
		this._scr = t;
		t.bottom = 0;
		t.bounces = false;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "off";
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.viewport = this._scr_gp_i();
		return t;
	};
	_proto._scr_gp_i = function () {
		var t = new eui.Group();
		this._scr_gp = t;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._UIGWinList_i = function () {
		var t = new UIGWinList();
		this._UIGWinList = t;
		t.skinName = "gWinListSkin";
		t.x = 2000;
		t.y = 62;
		return t;
	};
	_proto._mask_i = function () {
		var t = new eui.Image();
		this._mask = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg8_png";
		t.touchEnabled = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return gameSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gBetMoney0Skin.exml'] = window.gBetMoney0Skin = (function (_super) {
	__extends(gBetMoney0Skin, _super);
	function gBetMoney0Skin() {
		_super.call(this);
		this.skinParts = ["_bg","_img","_wind"];
		
		this.height = 137;
		this.width = 136;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gBetMoney0Skin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.elementsContent = [this._bg_i(),this._img_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Rplist1_json.img_plist1_img19";
		t.verticalCenter = 1.5;
		return t;
	};
	_proto._img_i = function () {
		var t = new eui.Image();
		this._img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Rplist0_json.img_plist0_bigbet0";
		t.verticalCenter = 0;
		return t;
	};
	return gBetMoney0Skin;
})(eui.Skin);generateEUI.paths['resource/skin/gBetMoney1Skin.exml'] = window.gBetMoney1Skin = (function (_super) {
	__extends(gBetMoney1Skin, _super);
	function gBetMoney1Skin() {
		_super.call(this);
		this.skinParts = ["_img","_wind"];
		
		this.height = 120;
		this.width = 120;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gBetMoney1Skin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.elementsContent = [this._img_i()];
		return t;
	};
	_proto._img_i = function () {
		var t = new eui.Image();
		this._img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Rplist0_json.img_plist0_bigbet0";
		t.verticalCenter = 0;
		return t;
	};
	return gBetMoney1Skin;
})(eui.Skin);generateEUI.paths['resource/skin/gDeskGameWinInfoItemSkin.exml'] = window.gDeskGameWinInfoItemSkin = (function (_super) {
	__extends(gDeskGameWinInfoItemSkin, _super);
	function gDeskGameWinInfoItemSkin() {
		_super.call(this);
		this.skinParts = ["_bg","_num"];
		
		this.height = 63;
		this.width = 63;
		this.elementsContent = [this._bg_i(),this._num_i()];
	}
	var _proto = gDeskGameWinInfoItemSkin.prototype;

	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.horizontalCenter = 1.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Rplist1_json.img_plist1_img13";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto._num_i = function () {
		var t = new eui.Label();
		this._num = t;
		t.horizontalCenter = 1.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "33";
		t.verticalCenter = 0.5;
		return t;
	};
	return gDeskGameWinInfoItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gDeskGameWinInfoSkin.exml'] = window.gDeskGameWinInfoSkin = (function (_super) {
	__extends(gDeskGameWinInfoSkin, _super);
	function gDeskGameWinInfoSkin() {
		_super.call(this);
		this.skinParts = ["_font","_scr_gp","_scr","_wind"];
		
		this.height = 174;
		this.width = 1371;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gDeskGameWinInfoSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.elementsContent = [this._Rect1_i(),this._font_i(),this._scr_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.4;
		t.bottom = 0;
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._font_i = function () {
		var t = new eui.Label();
		this._font = t;
		t.bold = true;
		t.horizontalCenter = 591;
		t.size = 36;
		t.text = "上局结果";
		t.textColor = 0xd3b992;
		t.y = 116;
		return t;
	};
	_proto._scr_i = function () {
		var t = new eui.Scroller();
		this._scr = t;
		t.bounces = false;
		t.height = 174;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 1163;
		t.x = 17;
		t.y = 0;
		t.viewport = this._scr_gp_i();
		return t;
	};
	_proto._scr_gp_i = function () {
		var t = new eui.DataGroup();
		this._scr_gp = t;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.orientation = "columns";
		t.paddingBottom = 20;
		t.paddingTop = 20;
		t.requestedRowCount = 2;
		t.verticalAlign = "justify";
		return t;
	};
	return gDeskGameWinInfoSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gDeskSkin.exml'] = window.gDeskSkin = (function (_super) {
	__extends(gDeskSkin, _super);
	var gDeskSkin$Skin6 = 	(function (_super) {
		__extends(gDeskSkin$Skin6, _super);
		function gDeskSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist0_json.btn_plist0_sureBet1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gDeskSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist0_json.btn_plist0_sureBet0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gDeskSkin$Skin6;
	})(eui.Skin);

	var gDeskSkin$Skin7 = 	(function (_super) {
		__extends(gDeskSkin$Skin7, _super);
		function gDeskSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist0_json.btn_plist0_callBack1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gDeskSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist0_json.btn_plist0_callBack0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gDeskSkin$Skin7;
	})(eui.Skin);

	var gDeskSkin$Skin8 = 	(function (_super) {
		__extends(gDeskSkin$Skin8, _super);
		function gDeskSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist0_json.btn_plist0_back1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gDeskSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist0_json.btn_plist0_back0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gDeskSkin$Skin8;
	})(eui.Skin);

	function gDeskSkin() {
		_super.call(this);
		this.skinParts = ["_bg","_wininfo","_gp_win_area","_gp_other_bet","_gp_ready_bet","_explain_allbet","_font_all_bet","_font_my_bet","_font_not_bet","_explain_mybet","_explain_notbet","_gp_font","_btn_bet0","_btn_bet1","_btn_bet2","_btn_bet3","_btn_bet4","_gp_selectBet","_UIGShowCpu","_UIGShowMoney","_btn_sureBet","_btn_backBet","_gp_sureBet","_btn_back","_gp_desk","_drop_down","_wind"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gDeskSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._gp_desk_i(),this._drop_down_i()];
		return t;
	};
	_proto._gp_desk_i = function () {
		var t = new eui.Group();
		this._gp_desk = t;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this._bg_i(),this._wininfo_i(),this._Image1_i(),this._gp_win_area_i(),this._gp_other_bet_i(),this._gp_ready_bet_i(),this._gp_font_i(),this._gp_selectBet_i(),this._UIGShowCpu_i(),this._UIGShowMoney_i(),this._gp_sureBet_i(),this._btn_back_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.source = "img_bg2_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._wininfo_i = function () {
		var t = new UIGDeskGameWinInfo();
		this._wininfo = t;
		t.skinName = "gDeskGameWinInfoSkin";
		t.x = 443;
		t.y = 19;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_bg10_png";
		t.x = 55;
		t.y = 212;
		return t;
	};
	_proto._gp_win_area_i = function () {
		var t = new eui.Group();
		this._gp_win_area = t;
		t.height = 725;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1890;
		t.x = 55;
		t.y = 212;
		return t;
	};
	_proto._gp_other_bet_i = function () {
		var t = new eui.Group();
		this._gp_other_bet = t;
		t.height = 725;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1890;
		t.x = 55;
		t.y = 212;
		return t;
	};
	_proto._gp_ready_bet_i = function () {
		var t = new eui.Group();
		this._gp_ready_bet = t;
		t.height = 725;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1890;
		t.x = 55;
		t.y = 212;
		return t;
	};
	_proto._gp_font_i = function () {
		var t = new eui.Group();
		this._gp_font = t;
		t.x = 52;
		t.y = 32;
		t.elementsContent = [this._explain_allbet_i(),this._font_all_bet_i(),this._font_my_bet_i(),this._font_not_bet_i(),this._explain_mybet_i(),this._explain_notbet_i()];
		return t;
	};
	_proto._explain_allbet_i = function () {
		var t = new eui.Label();
		this._explain_allbet = t;
		t.alpha = 0.5;
		t.left = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "所有投注";
		t.y = 0;
		return t;
	};
	_proto._font_all_bet_i = function () {
		var t = new eui.Label();
		this._font_all_bet = t;
		t.alpha = 0.5;
		t.left = 171;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "0 EOS";
		t.y = 0;
		return t;
	};
	_proto._font_my_bet_i = function () {
		var t = new eui.Label();
		this._font_my_bet = t;
		t.alpha = 0.5;
		t.left = 171;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "0 EOS";
		t.y = 54;
		return t;
	};
	_proto._font_not_bet_i = function () {
		var t = new eui.Label();
		this._font_not_bet = t;
		t.alpha = 0.5;
		t.left = 138;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "0 EOS";
		t.y = 102;
		return t;
	};
	_proto._explain_mybet_i = function () {
		var t = new eui.Label();
		this._explain_mybet = t;
		t.alpha = 0.5;
		t.left = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "我的投注";
		t.y = 52;
		return t;
	};
	_proto._explain_notbet_i = function () {
		var t = new eui.Label();
		this._explain_notbet = t;
		t.alpha = 0.5;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "待下注";
		t.y = 102;
		return t;
	};
	_proto._gp_selectBet_i = function () {
		var t = new eui.Group();
		this._gp_selectBet = t;
		t.x = 530;
		t.y = 966;
		t.elementsContent = [this._btn_bet0_i(),this._btn_bet1_i(),this._btn_bet2_i(),this._btn_bet3_i(),this._btn_bet4_i()];
		return t;
	};
	_proto._btn_bet0_i = function () {
		var t = new UIGBetMoney0();
		this._btn_bet0 = t;
		t.skinName = "gBetMoney0Skin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_bet1_i = function () {
		var t = new UIGBetMoney0();
		this._btn_bet1 = t;
		t.skinName = "gBetMoney0Skin";
		t.x = 203;
		t.y = 0;
		return t;
	};
	_proto._btn_bet2_i = function () {
		var t = new UIGBetMoney0();
		this._btn_bet2 = t;
		t.skinName = "gBetMoney0Skin";
		t.x = 401;
		t.y = 0;
		return t;
	};
	_proto._btn_bet3_i = function () {
		var t = new UIGBetMoney0();
		this._btn_bet3 = t;
		t.skinName = "gBetMoney0Skin";
		t.x = 604;
		t.y = 0;
		return t;
	};
	_proto._btn_bet4_i = function () {
		var t = new UIGBetMoney0();
		this._btn_bet4 = t;
		t.skinName = "gBetMoney0Skin";
		t.x = 803;
		t.y = 0;
		return t;
	};
	_proto._UIGShowCpu_i = function () {
		var t = new UIGShowCpu();
		this._UIGShowCpu = t;
		t.skinName = "gShowCpuSkin";
		t.x = 0;
		t.y = 937;
		return t;
	};
	_proto._UIGShowMoney_i = function () {
		var t = new UIGShowMoney();
		this._UIGShowMoney = t;
		t.bottom = 0;
		t.right = 0;
		t.skinName = "gShowMoneySkin";
		return t;
	};
	_proto._gp_sureBet_i = function () {
		var t = new eui.Group();
		this._gp_sureBet = t;
		t.x = 1436;
		t.y = 957;
		t.elementsContent = [this._btn_sureBet_i(),this._btn_backBet_i()];
		return t;
	};
	_proto._btn_sureBet_i = function () {
		var t = new eui.Button();
		this._btn_sureBet = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = gDeskSkin$Skin6;
		return t;
	};
	_proto._btn_backBet_i = function () {
		var t = new eui.Button();
		this._btn_backBet = t;
		t.label = "";
		t.x = 294;
		t.y = 0;
		t.skinName = gDeskSkin$Skin7;
		return t;
	};
	_proto._btn_back_i = function () {
		var t = new eui.Button();
		this._btn_back = t;
		t.label = "";
		t.x = 361;
		t.y = 112;
		t.skinName = gDeskSkin$Skin8;
		return t;
	};
	_proto._drop_down_i = function () {
		var t = new eui.Image();
		this._drop_down = t;
		t.bottom = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Rplist1_json.img_plist1_img14";
		t.touchEnabled = false;
		t.x = 684;
		t.y = 1061;
		return t;
	};
	return gDeskSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gDskGameWinInfoItem2Skin.exml'] = window.gDskGameWinInfoItem2Skin = (function (_super) {
	__extends(gDskGameWinInfoItem2Skin, _super);
	function gDskGameWinInfoItem2Skin() {
		_super.call(this);
		this.skinParts = ["_bg","_num","_bg0","_num0"];
		
		this.height = 174;
		this.width = 63;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = gDskGameWinInfoItem2Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.top = 0;
		t.x = -10;
		t.elementsContent = [this._bg_i(),this._num_i(),this._bg0_i(),this._num0_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Rplist1_json.img_plist1_img13";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._num_i = function () {
		var t = new eui.Label();
		this._num = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "33";
		t.x = 26;
		t.y = 28;
		return t;
	};
	_proto._bg0_i = function () {
		var t = new eui.Image();
		this._bg0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Rplist1_json.img_plist1_img13";
		t.x = -1;
		t.y = 88;
		return t;
	};
	_proto._num0_i = function () {
		var t = new eui.Label();
		this._num0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "33";
		t.x = 25;
		t.y = 116;
		return t;
	};
	return gDskGameWinInfoItem2Skin;
})(eui.Skin);generateEUI.paths['resource/skin/gFirstLoginSkin.exml'] = window.gFirstLoginSkin = (function (_super) {
	__extends(gFirstLoginSkin, _super);
	var gFirstLoginSkin$Skin9 = 	(function (_super) {
		__extends(gFirstLoginSkin$Skin9, _super);
		function gFirstLoginSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist0_json.btn_plist0_close1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gFirstLoginSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist0_json.btn_plist0_close0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gFirstLoginSkin$Skin9;
	})(eui.Skin);

	var gFirstLoginSkin$Skin10 = 	(function (_super) {
		__extends(gFirstLoginSkin$Skin10, _super);
		function gFirstLoginSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist1_json.btn_plist1_iknow1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gFirstLoginSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist1_json.btn_plist1_iknow0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gFirstLoginSkin$Skin10;
	})(eui.Skin);

	function gFirstLoginSkin() {
		_super.call(this);
		this.skinParts = ["_btn_close","_btn_IKnow","_wind"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gFirstLoginSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._btn_close_i(),this._btn_IKnow_i(),this._Image2_i(),this._Group6_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 34.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg11_png";
		t.verticalCenter = 54.5;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Button();
		this._btn_close = t;
		t.label = "";
		t.x = 1580;
		t.y = 21;
		t.skinName = gFirstLoginSkin$Skin9;
		return t;
	};
	_proto._btn_IKnow_i = function () {
		var t = new eui.Button();
		this._btn_IKnow = t;
		t.label = "";
		t.x = 766;
		t.y = 827;
		t.skinName = gFirstLoginSkin$Skin10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "Rplist1_json.img_plist1_img15";
		t.x = 858;
		t.y = 69;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 416;
		t.y = 247;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 2;
		t.y = 0;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Image3_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "选择区域投注后，需在本局倒计时结束前点击                          ，确认后方为成功下注";
		t.textColor = 0xd3b992;
		t.width = 1200;
		t.x = 27;
		t.y = 3;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "•";
		t.textColor = 0xd3b992;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "Rplist0_json.btn_plist0_sureBet0";
		t.x = 750;
		t.y = -31;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 2;
		t.y = 170;
		t.elementsContent = [this._Label3_i(),this._Label4_i(),this._Image4_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "选择一个区域后，可点击                            撤回当前区域待下注金额；";
		t.textColor = 0xD3B992;
		t.width = 1200;
		t.x = 27;
		t.y = 1;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "•";
		t.textColor = 0xD3B992;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "Rplist0_json.btn_plist0_callBack0";
		t.x = 424;
		t.y = -33;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 2;
		t.y = 298;
		t.elementsContent = [this._Label5_i(),this._Label6_i(),this._Image5_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "点击任何区域                           确认投注本局游戏所有待下注金额；";
		t.textColor = 0xD3B992;
		t.width = 1200;
		t.x = 27;
		t.y = 1;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "•";
		t.textColor = 0xD3B992;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "Rplist0_json.btn_plist0_sureBet0";
		t.x = 246;
		t.y = -37;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 2;
		t.y = 414;
		t.elementsContent = [this._Label7_i(),this._Label8_i(),this._Image6_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "点击左上角       ，可撤回本局所有待下注金额；";
		t.textColor = 0xD3B992;
		t.width = 1200;
		t.x = 27;
		t.y = 1;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "•";
		t.textColor = 0xD3B992;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "Rplist0_json.btn_plist0_back0";
		t.x = 210;
		t.y = -21;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 518;
		t.elementsContent = [this._Label9_i(),this._Label10_i()];
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "未尽事宜，请查看游戏规则。";
		t.textColor = 0xD3B992;
		t.width = 1200;
		t.x = 27;
		t.y = 1;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "•";
		t.textColor = 0xD3B992;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return gFirstLoginSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gIntroduceItem1Skin.exml'] = window.gIntroduceItem1Skin = (function (_super) {
	__extends(gIntroduceItem1Skin, _super);
	function gIntroduceItem1Skin() {
		_super.call(this);
		this.skinParts = ["_wind"];
		
		this.height = 402;
		this.width = 1287;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gIntroduceItem1Skin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.text = "游戏简介";
		t.textAlign = "left";
		t.textColor = 0xE1B765;
		t.x = 9;
		t.y = 15;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "轮盘游戏中包含一个轮盘和一张桌子。 \n		\n轮盘上标有1-36的红黑两色数字和一个绿色的0。桌子上则显示了与轮盘相对应的数字/区域以及赔率，每一个数字/区域都可以下注。 \n		\n每盘下注时间为40秒，下注结束后。轮盘以顺时针方向旋转，球将以逆时针方向绕行，球将落在其中之一的数字沟槽里。如果球落入了您投注的数字沟槽，您将赢得奖金。";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.width = 1200;
		t.x = 37;
		t.y = 90;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "•";
		t.textColor = 0xd3b992;
		t.x = 10;
		t.y = 88;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "•";
		t.textColor = 0xd3b992;
		t.x = 10;
		t.y = 161;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "•";
		t.textColor = 0xd3b992;
		t.x = 10;
		t.y = 267;
		return t;
	};
	return gIntroduceItem1Skin;
})(eui.Skin);generateEUI.paths['resource/skin/gIntroduceItem2Skin.exml'] = window.gIntroduceItem2Skin = (function (_super) {
	__extends(gIntroduceItem2Skin, _super);
	function gIntroduceItem2Skin() {
		_super.call(this);
		this.skinParts = ["_wind"];
		
		this.height = 922;
		this.width = 1287;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gIntroduceItem2Skin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 9;
		t.y = 15;
		t.elementsContent = [this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.text = "投注及赔率";
		t.textAlign = "left";
		t.textColor = 0xE1B765;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "轮盘有多种投注方式，可单押数字、亦可押外围区域，如下列各种：";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.width = 1200;
		t.x = 28;
		t.y = 75;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 119;
		t.y = 173;
		t.elementsContent = [this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "下注类型";
		t.textAlign = "left";
		t.textColor = 0xe1b765;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "说明";
		t.textAlign = "left";
		t.textColor = 0xE1B765;
		t.x = 489;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "赔率";
		t.textAlign = "left";
		t.textColor = 0xE1B765;
		t.x = 933;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 37;
		t.y = 150;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i(),this._Rect8_i(),this._Rect9_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.height = 707;
		t.strokeColor = 0x432f12;
		t.strokeWeight = 2;
		t.width = 1200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x432f12;
		t.height = 2;
		t.width = 1200;
		t.x = 0;
		t.y = 80;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x432F12;
		t.height = 2;
		t.width = 1200;
		t.x = 0;
		t.y = 158;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x432F12;
		t.height = 2;
		t.width = 1200;
		t.x = 0;
		t.y = 236;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x432F12;
		t.height = 2;
		t.width = 1200;
		t.x = 0;
		t.y = 314;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x432F12;
		t.height = 2;
		t.width = 1200;
		t.x = 0;
		t.y = 392;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x432F12;
		t.height = 2;
		t.width = 1200;
		t.x = 0;
		t.y = 563;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x432F12;
		t.height = 704;
		t.width = 2;
		t.x = 301;
		t.y = 0;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x432F12;
		t.height = 704;
		t.width = 2;
		t.x = 896;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.width = 1005;
		t.x = 119;
		t.y = 253;
		t.elementsContent = [this._Label6_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -430.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "单个数字";
		t.textAlign = "left";
		t.textColor = 0xd3b992;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 22.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "投注于一个数字（0~36）的格上";
		t.textAlign = "left";
		t.textColor = 0xd3b992;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 466.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "1:35";
		t.textAlign = "left";
		t.textColor = 0xd3b992;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.width = 1005;
		t.x = 119;
		t.y = 330;
		t.elementsContent = [this._Label9_i(),this._Label10_i(),this._Label11_i()];
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -430.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "颜色";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 22.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "投注于外围红色或黑色";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 0;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 466.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "1:1";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.width = 1005;
		t.x = 119;
		t.y = 409;
		t.elementsContent = [this._Label12_i(),this._Label13_i(),this._Label14_i()];
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -430.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "单双";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 22.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "投注于外围单数或双数（不含0）";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 0;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 466.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "1:1";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 36;
		t.width = 1005;
		t.x = 119;
		t.y = 486;
		t.elementsContent = [this._Label15_i(),this._Label16_i(),this._Label17_i()];
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -430.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "大小";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 0;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 22.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "投注于外围大(19~36)或小(1~18)";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 0;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 466.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "1:1";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 137;
		t.width = 1005;
		t.x = 119;
		t.y = 555;
		t.elementsContent = [this._Label18_i(),this._Label19_i(),this._Label20_i()];
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -430.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "前区/中区/后区";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 46;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 23;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "投注于外围前面12个号码(1~12)、 中间12个号码(13~24)或后面12个 号码(25~36)";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.width = 525;
		t.y = 11;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 467;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "1:2";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 50;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 137;
		t.width = 1005;
		t.x = 119;
		t.y = 717;
		t.elementsContent = [this._Label21_i(),this._Label22_i(),this._Label23_i()];
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -430.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "一线/二线/三线";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 46;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 23;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "投注于外围一线(1,4,7,10...)、 二线(2,5,8,11...)或三线(3,6,9,12...)                         ";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.width = 525;
		t.y = 27;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 467;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "1:2";
		t.textAlign = "left";
		t.textColor = 0xD3B992;
		t.y = 50;
		return t;
	};
	return gIntroduceItem2Skin;
})(eui.Skin);generateEUI.paths['resource/skin/gIntroduceSkin.exml'] = window.gIntroduceSkin = (function (_super) {
	__extends(gIntroduceSkin, _super);
	var gIntroduceSkin$Skin11 = 	(function (_super) {
		__extends(gIntroduceSkin$Skin11, _super);
		function gIntroduceSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist0_json.btn_plist0_close1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gIntroduceSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist0_json.btn_plist0_close0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gIntroduceSkin$Skin11;
	})(eui.Skin);

	function gIntroduceSkin() {
		_super.call(this);
		this.skinParts = ["_btn_close","_scr_group","_scr","_wind"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gIntroduceSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._btn_close_i(),this._Image2_i(),this._scr_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 34.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg11_png";
		t.verticalCenter = 54.5;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Button();
		this._btn_close = t;
		t.label = "";
		t.x = 1580;
		t.y = 21;
		t.skinName = gIntroduceSkin$Skin11;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "Rplist1_json.img_plist1_img18";
		t.x = 858;
		t.y = 69;
		return t;
	};
	_proto._scr_i = function () {
		var t = new eui.Scroller();
		this._scr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 803;
		t.width = 1287;
		t.x = 390;
		t.y = 214;
		t.viewport = this._scr_group_i();
		return t;
	};
	_proto._scr_group_i = function () {
		var t = new eui.Group();
		this._scr_group = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	return gIntroduceSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gMaxWinItemSkin.exml'] = window.gMaxWinItemSkin = (function (_super) {
	__extends(gMaxWinItemSkin, _super);
	function gMaxWinItemSkin() {
		_super.call(this);
		this.skinParts = ["_name","_area","_money","_win","_wind"];
		
		this.height = 80;
		this.width = 1092;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gMaxWinItemSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._name_i(),this._area_i(),this._money_i(),this._win_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x705938;
		t.height = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1092;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._name_i = function () {
		var t = new eui.Label();
		this._name = t;
		t.horizontalCenter = -412.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "51goplaydapp";
		t.textColor = 0xD3B992;
		t.y = 22;
		return t;
	};
	_proto._area_i = function () {
		var t = new eui.Label();
		this._area = t;
		t.horizontalCenter = -134.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "6";
		t.textColor = 0xD3B992;
		t.y = 22;
		return t;
	};
	_proto._money_i = function () {
		var t = new eui.Label();
		this._money = t;
		t.horizontalCenter = 150.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "13 EOS";
		t.textColor = 0xD3B992;
		t.y = 22;
		return t;
	};
	_proto._win_i = function () {
		var t = new eui.Label();
		this._win = t;
		t.horizontalCenter = 429;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "+500 EOS";
		t.textColor = 0xffc834;
		t.y = 23;
		return t;
	};
	return gMaxWinItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gMaxWinSkin.exml'] = window.gMaxWinSkin = (function (_super) {
	__extends(gMaxWinSkin, _super);
	function gMaxWinSkin() {
		_super.call(this);
		this.skinParts = ["_bg","_font_play","_font_betType","_font_betMoney","_font_winNum","_scr_group","_scr","_wind"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gMaxWinSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._bg_i(),this._Group1_i(),this._Group2_i(),this._scr_i(),this._Rect2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.source = "img_bg14_png";
		t.x = 420;
		t.y = 413;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 860;
		t.y = 106;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "Rplist1_json.img_plist1_img17";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "Rplist1_json.img_plist1_img16";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 37;
		t.width = 916;
		t.x = 554;
		t.y = 446;
		t.elementsContent = [this._font_play_i(),this._font_betType_i(),this._font_betMoney_i(),this._font_winNum_i()];
		return t;
	};
	_proto._font_play_i = function () {
		var t = new eui.Label();
		this._font_play = t;
		t.horizontalCenter = -422;
		t.size = 36;
		t.text = "玩家";
		t.textColor = 0xe1b765;
		t.y = 1;
		return t;
	};
	_proto._font_betType_i = function () {
		var t = new eui.Label();
		this._font_betType = t;
		t.horizontalCenter = -141;
		t.size = 36;
		t.text = "下注区域";
		t.textColor = 0xE1B765;
		t.y = 1;
		return t;
	};
	_proto._font_betMoney_i = function () {
		var t = new eui.Label();
		this._font_betMoney = t;
		t.horizontalCenter = 138;
		t.size = 36;
		t.text = "下注金额";
		t.textColor = 0xE1B765;
		t.y = 1;
		return t;
	};
	_proto._font_winNum_i = function () {
		var t = new eui.Label();
		this._font_winNum = t;
		t.horizontalCenter = 422;
		t.size = 36;
		t.text = "奖金";
		t.textColor = 0xE1B765;
		t.y = 0;
		return t;
	};
	_proto._scr_i = function () {
		var t = new eui.Scroller();
		this._scr = t;
		t.height = 484;
		t.width = 1092;
		t.x = 454;
		t.y = 504;
		t.viewport = this._scr_group_i();
		return t;
	};
	_proto._scr_group_i = function () {
		var t = new eui.DataGroup();
		this._scr_group = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.8;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1092;
		t.x = 455;
		t.y = 948;
		return t;
	};
	return gMaxWinSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gMoreSkin.exml'] = window.gMoreSkin = (function (_super) {
	__extends(gMoreSkin, _super);
	var gMoreSkin$Skin12 = 	(function (_super) {
		__extends(gMoreSkin$Skin12, _super);
		function gMoreSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist0_json.btn_plist0_close1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gMoreSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist0_json.btn_plist0_close0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gMoreSkin$Skin12;
	})(eui.Skin);

	function gMoreSkin() {
		_super.call(this);
		this.skinParts = ["_btn_close","_name","_btn_byebye","_font_tjyj","_btn_tjyj","_font_bgmic","_btn_bgMic","_font_sound","_btn_sound","_btn_dapp365","_font_cutLang","_btn_lang","_font_gameRule","_btn_game","_btn_share1","_btn_share2","_btn_share0","_wind"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._wind_i()];
		this._name_i();
		
		this._btn_byebye_i();
		
		this._Rect2_i();
		
		this.states = [
			new eui.State ("nologin",
				[
					new eui.SetProperty("_btn_close","right",0),
					new eui.SetProperty("_btn_close","top",0),
					new eui.SetProperty("_btn_bgMic","horizontalCenter",763),
					new eui.SetProperty("_btn_bgMic","verticalCenter",-326.5),
					new eui.SetProperty("_btn_sound","horizontalCenter",763),
					new eui.SetProperty("_btn_sound","verticalCenter",-218.5)
				])
			,
			new eui.State ("login",
				[
					new eui.AddItems("_name","_wind",2,"_font_tjyj"),
					new eui.AddItems("_btn_byebye","_wind",2,"_font_tjyj"),
					new eui.AddItems("_Rect2","_wind",1,""),
					new eui.SetProperty("_Image1","scale9Grid",new egret.Rectangle(263,346,36,30)),
					new eui.SetProperty("_Image1","height",936),
					new eui.SetProperty("_btn_close","top",0),
					new eui.SetProperty("_btn_close","right",0),
					new eui.SetProperty("_font_tjyj","top",200),
					new eui.SetProperty("_btn_tjyj","top",198),
					new eui.SetProperty("_font_bgmic","top",301),
					new eui.SetProperty("_btn_bgMic","horizontalCenter",763),
					new eui.SetProperty("_btn_bgMic","verticalCenter",-236.5),
					new eui.SetProperty("_font_sound","top",399),
					new eui.SetProperty("_btn_sound","horizontalCenter",763),
					new eui.SetProperty("_btn_sound","verticalCenter",-138.5),
					new eui.SetProperty("_Label1","top",511),
					new eui.SetProperty("_btn_dapp365","top",507),
					new eui.SetProperty("_font_cutLang","top",608),
					new eui.SetProperty("_btn_lang","top",608),
					new eui.SetProperty("_font_gameRule","top",706),
					new eui.SetProperty("_btn_game","top",705),
					new eui.SetProperty("_btn_share1","top",802),
					new eui.SetProperty("_btn_share2","top",802),
					new eui.SetProperty("_btn_share0","top",802)
				])
		];
	}
	var _proto = gMoreSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._btn_close_i(),this._font_tjyj_i(),this._btn_tjyj_i(),this._font_bgmic_i(),this._btn_bgMic_i(),this._font_sound_i(),this._btn_sound_i(),this._Label1_i(),this._btn_dapp365_i(),this._font_cutLang_i(),this._btn_lang_i(),this._font_gameRule_i(),this._btn_game_i(),this._btn_share1_i(),this._btn_share2_i(),this._btn_share0_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.right = 161;
		t.source = "img_bg12_png";
		t.top = 33;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Button();
		this._btn_close = t;
		t.label = "";
		t.right = 0;
		t.top = 0;
		t.skinName = gMoreSkin$Skin12;
		return t;
	};
	_proto._name_i = function () {
		var t = new eui.Label();
		this._name = t;
		t.horizontalCenter = 458;
		t.size = 42;
		t.text = "51goplaydapp";
		t.textColor = 0xD3B992;
		t.y = 106;
		return t;
	};
	_proto._btn_byebye_i = function () {
		var t = new eui.Label();
		this._btn_byebye = t;
		t.left = 1708;
		t.size = 42;
		t.text = "退出";
		t.textColor = 0xD3B992;
		t.top = 108;
		return t;
	};
	_proto._font_tjyj_i = function () {
		var t = new eui.Label();
		this._font_tjyj = t;
		t.size = 42;
		t.text = "推荐有奖";
		t.textColor = 0xd3b992;
		t.x = 1324;
		t.y = 120;
		return t;
	};
	_proto._btn_tjyj_i = function () {
		var t = new eui.Image();
		this._btn_tjyj = t;
		t.source = "Rplist1_json.img_plist1_img4";
		t.x = 1734;
		t.y = 114;
		return t;
	};
	_proto._font_bgmic_i = function () {
		var t = new eui.Label();
		this._font_bgmic = t;
		t.size = 42;
		t.text = "背景音乐";
		t.textColor = 0xD3B992;
		t.x = 1325;
		t.y = 211;
		return t;
	};
	_proto._btn_bgMic_i = function () {
		var t = new eui.Image();
		this._btn_bgMic = t;
		t.source = "Rplist1_json.img_plist1_img6";
		t.x = 1734;
		t.y = 206;
		return t;
	};
	_proto._font_sound_i = function () {
		var t = new eui.Label();
		this._font_sound = t;
		t.size = 42;
		t.text = "音效";
		t.textColor = 0xD3B992;
		t.x = 1325;
		t.y = 319;
		return t;
	};
	_proto._btn_sound_i = function () {
		var t = new eui.Image();
		this._btn_sound = t;
		t.source = "Rplist1_json.img_plist1_img6";
		t.x = 1734;
		t.y = 327;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.size = 42;
		t.text = "dapp365";
		t.textColor = 0xD3B992;
		t.x = 1324;
		t.y = 431;
		return t;
	};
	_proto._btn_dapp365_i = function () {
		var t = new eui.Image();
		this._btn_dapp365 = t;
		t.source = "Rplist1_json.img_plist1_img0";
		t.x = 1739;
		t.y = 428;
		return t;
	};
	_proto._font_cutLang_i = function () {
		var t = new eui.Label();
		this._font_cutLang = t;
		t.size = 42;
		t.text = "语言切换";
		t.textColor = 0xD3B992;
		t.x = 1324;
		t.y = 528;
		return t;
	};
	_proto._btn_lang_i = function () {
		var t = new eui.Label();
		this._btn_lang = t;
		t.size = 42;
		t.text = "中文";
		t.textColor = 0xD3B992;
		t.x = 1699;
		t.y = 528;
		return t;
	};
	_proto._font_gameRule_i = function () {
		var t = new eui.Label();
		this._font_gameRule = t;
		t.size = 42;
		t.text = "游戏规则";
		t.textColor = 0xD3B992;
		t.x = 1324;
		t.y = 626;
		return t;
	};
	_proto._btn_game_i = function () {
		var t = new eui.Image();
		this._btn_game = t;
		t.source = "Rplist1_json.img_plist1_img7";
		t.x = 1737;
		t.y = 625;
		return t;
	};
	_proto._btn_share1_i = function () {
		var t = new eui.Image();
		this._btn_share1 = t;
		t.source = "Rplist1_json.img_plist1_img2";
		t.x = 1473;
		t.y = 718;
		return t;
	};
	_proto._btn_share2_i = function () {
		var t = new eui.Image();
		this._btn_share2 = t;
		t.source = "Rplist1_json.img_plist1_img1";
		t.x = 1622;
		t.y = 718;
		return t;
	};
	_proto._btn_share0_i = function () {
		var t = new eui.Image();
		this._btn_share0 = t;
		t.source = "Rplist1_json.img_plist1_img3";
		t.width = 90;
		t.x = 1323;
		t.y = 718;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		this._Rect2 = t;
		t.fillColor = 0xd3b992;
		t.height = 37;
		t.width = 3;
		t.x = 1645;
		t.y = 109;
		return t;
	};
	return gMoreSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gRecordItemSkin.exml'] = window.gRecordItemSkin = (function (_super) {
	__extends(gRecordItemSkin, _super);
	function gRecordItemSkin() {
		_super.call(this);
		this.skinParts = ["_font_time","_font_name","_font_area","_font_money","_font_winNum","_wind"];
		
		this.height = 82;
		this.width = 1394;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gRecordItemSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._font_time_i(),this._font_name_i(),this._font_area_i(),this._font_money_i(),this._font_winNum_i()];
		return t;
	};
	_proto._font_time_i = function () {
		var t = new eui.Label();
		this._font_time = t;
		t.size = 36;
		t.text = "15:06:34";
		t.textColor = 0xd3b992;
		t.x = 71;
		t.y = 23;
		return t;
	};
	_proto._font_name_i = function () {
		var t = new eui.Label();
		this._font_name = t;
		t.size = 36;
		t.text = "51goplaydapp";
		t.textColor = 0xD3B992;
		t.x = 310;
		t.y = 22;
		return t;
	};
	_proto._font_area_i = function () {
		var t = new eui.Label();
		this._font_area = t;
		t.size = 36;
		t.text = "6";
		t.textColor = 0xD3B992;
		t.x = 691;
		t.y = 22;
		return t;
	};
	_proto._font_money_i = function () {
		var t = new eui.Label();
		this._font_money = t;
		t.size = 36;
		t.text = "13 EOS";
		t.textColor = 0xD3B992;
		t.x = 923;
		t.y = 22;
		return t;
	};
	_proto._font_winNum_i = function () {
		var t = new eui.Label();
		this._font_winNum = t;
		t.bold = true;
		t.size = 36;
		t.text = "等待开奖";
		t.textColor = 0xffc834;
		t.x = 1192;
		t.y = 21;
		return t;
	};
	return gRecordItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gRecordSkin.exml'] = window.gRecordSkin = (function (_super) {
	__extends(gRecordSkin, _super);
	var gRecordSkin$Skin13 = 	(function (_super) {
		__extends(gRecordSkin$Skin13, _super);
		function gRecordSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist1_json.btn_plist1_all1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gRecordSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist1_json.btn_plist1_all0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gRecordSkin$Skin13;
	})(eui.Skin);

	var gRecordSkin$Skin14 = 	(function (_super) {
		__extends(gRecordSkin$Skin14, _super);
		function gRecordSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist1_json.btn_plist1_my1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gRecordSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist1_json.btn_plist1_my0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gRecordSkin$Skin14;
	})(eui.Skin);

	var gRecordSkin$Skin15 = 	(function (_super) {
		__extends(gRecordSkin$Skin15, _super);
		function gRecordSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","Rplist1_json.btn_plist1_back1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gRecordSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "Rplist1_json.btn_plist1_back0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gRecordSkin$Skin15;
	})(eui.Skin);

	function gRecordSkin() {
		_super.call(this);
		this.skinParts = ["_radio_btn_all","_radio_btn_my","_btn_back","_scr_group","_scr","_wind"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gRecordSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._radio_btn_all_i(),this._radio_btn_my_i(),this._btn_back_i(),this._Group1_i(),this._scr_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "img_bg13_png";
		t.x = 510;
		t.y = 58;
		return t;
	};
	_proto._radio_btn_all_i = function () {
		var t = new eui.RadioButton();
		this._radio_btn_all = t;
		t.label = "";
		t.x = 26;
		t.y = 58;
		t.skinName = gRecordSkin$Skin13;
		return t;
	};
	_proto._radio_btn_my_i = function () {
		var t = new eui.RadioButton();
		this._radio_btn_my = t;
		t.label = "";
		t.selected = true;
		t.x = 24;
		t.y = 248;
		t.skinName = gRecordSkin$Skin14;
		return t;
	};
	_proto._btn_back_i = function () {
		var t = new eui.Button();
		this._btn_back = t;
		t.label = "";
		t.x = 27;
		t.y = 885;
		t.skinName = gRecordSkin$Skin15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 632;
		t.y = 106;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 36;
		t.text = "时间";
		t.textColor = 0xe1b765;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 36;
		t.text = "玩家";
		t.textColor = 0xE1B765;
		t.x = 283;
		t.y = 1;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 36;
		t.text = "下注区域";
		t.textColor = 0xE1B765;
		t.x = 526;
		t.y = 1;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 36;
		t.text = "下注金额";
		t.textColor = 0xE1B765;
		t.x = 805;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 36;
		t.text = "奖金";
		t.textColor = 0xE1B765;
		t.x = 1128;
		t.y = 0;
		return t;
	};
	_proto._scr_i = function () {
		var t = new eui.Scroller();
		this._scr = t;
		t.height = 846;
		t.width = 1394;
		t.x = 530;
		t.y = 180;
		t.viewport = this._scr_group_i();
		return t;
	};
	_proto._scr_group_i = function () {
		var t = new eui.DataGroup();
		this._scr_group = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	return gRecordSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gWinNumShowSkin.exml'] = window.gWinNumShowSkin = (function (_super) {
	__extends(gWinNumShowSkin, _super);
	function gWinNumShowSkin() {
		_super.call(this);
		this.skinParts = ["_bg","_font_num","_font_wins","_roulette","_box","_gp_roulette","_mask","_wind"];
		
		this.height = 259;
		this.width = 485;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gWinNumShowSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._bg_i(),this._font_num_i(),this._font_wins_i(),this._gp_roulette_i(),this._mask_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Rplist0_json.img_plist0_resultBg3";
		t.x = -26;
		t.y = -26;
		return t;
	};
	_proto._font_num_i = function () {
		var t = new eui.Label();
		this._font_num = t;
		t.horizontalCenter = 125;
		t.size = 102;
		t.text = "8";
		t.textColor = 0xfee618;
		t.y = 50;
		return t;
	};
	_proto._font_wins_i = function () {
		var t = new eui.Label();
		this._font_wins = t;
		t.horizontalCenter = 128;
		t.size = 41;
		t.text = "WINS";
		t.textColor = 0xfee618;
		t.y = 181;
		return t;
	};
	_proto._gp_roulette_i = function () {
		var t = new eui.Group();
		this._gp_roulette = t;
		t.anchorOffsetX = 611.5;
		t.anchorOffsetY = 572.5;
		t.height = 1125;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.width = 1125;
		t.x = -132.94;
		t.y = 133;
		t.elementsContent = [this._roulette_i(),this._box_i()];
		return t;
	};
	_proto._roulette_i = function () {
		var t = new eui.Image();
		this._roulette = t;
		t.anchorOffsetX = 498.5;
		t.anchorOffsetY = 498.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg6_png";
		t.x = 611.5;
		t.y = 572.5;
		return t;
	};
	_proto._box_i = function () {
		var t = new eui.Image();
		this._box = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 23;
		t.source = "Rplist1_json.img_plist1_img24";
		t.x = 707;
		t.y = 702;
		return t;
	};
	_proto._mask_i = function () {
		var t = new eui.Rect();
		this._mask = t;
		t.fillColor = 0xff0000;
		t.height = 221;
		t.width = 232;
		t.x = 18;
		t.y = 18;
		return t;
	};
	return gWinNumShowSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gRouletteSkin.exml'] = window.gRouletteSkin = (function (_super) {
	__extends(gRouletteSkin, _super);
	function gRouletteSkin() {
		_super.call(this);
		this.skinParts = ["_bg","_roulette","_box0","_gp_roulette","_head","_winNumShow","_box","_gp_box","_wind"];
		
		this.height = 1125;
		this.width = 1240;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gRouletteSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._bg_i(),this._Image1_i(),this._gp_roulette_i(),this._head_i(),this._winNumShow_i(),this._gp_box_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg4_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -8.5;
		t.source = "img_bg7_png";
		t.verticalCenter = 10;
		return t;
	};
	_proto._gp_roulette_i = function () {
		var t = new eui.Group();
		this._gp_roulette = t;
		t.anchorOffsetX = 611.5;
		t.anchorOffsetY = 572.5;
		t.height = 1125;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1125;
		t.x = 611.5;
		t.y = 572.5;
		t.elementsContent = [this._roulette_i(),this._box0_i()];
		return t;
	};
	_proto._roulette_i = function () {
		var t = new eui.Image();
		this._roulette = t;
		t.anchorOffsetX = 498.5;
		t.anchorOffsetY = 498.5;
		t.horizontalCenter = 49;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg6_png";
		t.verticalCenter = 10;
		return t;
	};
	_proto._box0_i = function () {
		var t = new eui.Image();
		this._box0 = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 23;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Rplist1_json.img_plist1_img24";
		t.x = 375;
		t.y = 572;
		return t;
	};
	_proto._head_i = function () {
		var t = new eui.Image();
		this._head = t;
		t.anchorOffsetX = 498.5;
		t.anchorOffsetY = 498.5;
		t.horizontalCenter = -5.5;
		t.source = "Rplist0_json.img_plist0_img0";
		t.verticalCenter = 14;
		return t;
	};
	_proto._winNumShow_i = function () {
		var t = new UIGWinNumShow();
		this._winNumShow = t;
		t.skinName = "gWinNumShowSkin";
		t.visible = false;
		t.x = 29;
		t.y = 28;
		return t;
	};
	_proto._gp_box_i = function () {
		var t = new eui.Group();
		this._gp_box = t;
		t.anchorOffsetX = 611.5;
		t.anchorOffsetY = 572.5;
		t.height = 1125;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1125;
		t.x = 611.5;
		t.y = 572.5;
		t.elementsContent = [this._box_i()];
		return t;
	};
	_proto._box_i = function () {
		var t = new eui.Image();
		this._box = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 23;
		t.source = "Rplist1_json.img_plist1_img24";
		t.x = 733;
		t.y = 410;
		return t;
	};
	return gRouletteSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gTimeCountSkin.exml'] = window.gTimeCountSkin = (function (_super) {
	__extends(gTimeCountSkin, _super);
	function gTimeCountSkin() {
		_super.call(this);
		this.skinParts = ["_img","_count_Time","_wind"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gTimeCountSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.height = 1125;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 2000;
		t.elementsContent = [this._img_i(),this._count_Time_i()];
		return t;
	};
	_proto._img_i = function () {
		var t = new eui.Image();
		this._img = t;
		t.horizontalCenter = 34;
		t.source = "Rplist0_json.img_plist0_countTimeBg";
		t.touchEnabled = false;
		t.verticalCenter = -350;
		return t;
	};
	_proto._count_Time_i = function () {
		var t = new eui.Label();
		this._count_Time = t;
		t.bold = true;
		t.horizontalCenter = 34.5;
		t.size = 36;
		t.text = "开始下注！ 34";
		t.textColor = 0xfff17b;
		t.touchEnabled = false;
		t.verticalCenter = -349.5;
		return t;
	};
	return gTimeCountSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gWaitNetSkin.exml'] = window.gWaitNetSkin = (function (_super) {
	__extends(gWaitNetSkin, _super);
	function gWaitNetSkin() {
		_super.call(this);
		this.skinParts = ["_wind"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gWaitNetSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return gWaitNetSkin;
})(eui.Skin);generateEUI.paths['resource/skin/gWinListItemSkin.exml'] = window.gWinListItemSkin = (function (_super) {
	__extends(gWinListItemSkin, _super);
	function gWinListItemSkin() {
		_super.call(this);
		this.skinParts = ["_name","_area","_money","_wind"];
		
		this.height = 51;
		this.width = 626;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gWinListItemSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._name_i(),this._area_i(),this._money_i()];
		return t;
	};
	_proto._name_i = function () {
		var t = new eui.Label();
		this._name = t;
		t.horizontalCenter = -170.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "51goplaydapp";
		t.textColor = 0xd3b992;
		t.x = 29;
		t.y = 6;
		return t;
	};
	_proto._area_i = function () {
		var t = new eui.Label();
		this._area = t;
		t.horizontalCenter = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "一线";
		t.textColor = 0xD3B992;
		t.y = 6;
		return t;
	};
	_proto._money_i = function () {
		var t = new eui.Label();
		this._money = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "13 EOS";
		t.textColor = 0xD3B992;
		t.x = 469;
		t.y = 6;
		return t;
	};
	return gWinListItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/loadSkin.exml'] = window.loadSkin = (function (_super) {
	__extends(loadSkin, _super);
	function loadSkin() {
		_super.call(this);
		this.skinParts = ["_roulette","_font"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = loadSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._roulette_i(),this._Image3_i(),this._font_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loadPlist2_json.img_loading_img1";
		t.x = 794;
		t.y = 221;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loadPlist2_json.img_loading_img0";
		t.x = 871;
		t.y = 299;
		return t;
	};
	_proto._roulette_i = function () {
		var t = new eui.Image();
		this._roulette = t;
		t.anchorOffsetX = 121;
		t.anchorOffsetY = 121;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loadPlist2_json.img_loading_img2";
		t.x = 992;
		t.y = 420;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loadPlist2_json.img_loading_img3";
		t.x = 871;
		t.y = 299;
		return t;
	};
	_proto._font_i = function () {
		var t = new eui.Label();
		this._font = t;
		t.horizontalCenter = 0.5;
		t.size = 96;
		t.text = "Label";
		t.y = 638;
		return t;
	};
	return loadSkin;
})(eui.Skin);generateEUI.paths['resource/skin/testSkin.exml'] = window.testSkin = (function (_super) {
	__extends(testSkin, _super);
	function testSkin() {
		_super.call(this);
		this.skinParts = ["_bg","_roulette","_box0","_gp_roulette","_head","_winNumShow","_box","_gp_box","_btn","_btn0","_wind"];
		
		this.height = 1125;
		this.width = 1240;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = testSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._bg_i(),this._Image1_i(),this._gp_roulette_i(),this._head_i(),this._winNumShow_i(),this._gp_box_i(),this._btn_i(),this._btn0_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg4_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -8.5;
		t.source = "img_bg7_png";
		t.verticalCenter = 10;
		return t;
	};
	_proto._gp_roulette_i = function () {
		var t = new eui.Group();
		this._gp_roulette = t;
		t.anchorOffsetX = 611.5;
		t.anchorOffsetY = 572.5;
		t.height = 1125;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1125;
		t.x = 611.5;
		t.y = 572.5;
		t.elementsContent = [this._roulette_i(),this._box0_i()];
		return t;
	};
	_proto._roulette_i = function () {
		var t = new eui.Image();
		this._roulette = t;
		t.anchorOffsetX = 498.5;
		t.anchorOffsetY = 498.5;
		t.horizontalCenter = 49;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bg6_png";
		t.verticalCenter = 10;
		return t;
	};
	_proto._box0_i = function () {
		var t = new eui.Image();
		this._box0 = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 23;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Rplist1_json.img_plist1_img24";
		t.x = 493;
		t.y = 217;
		return t;
	};
	_proto._head_i = function () {
		var t = new eui.Image();
		this._head = t;
		t.anchorOffsetX = 498.5;
		t.anchorOffsetY = 498.5;
		t.horizontalCenter = -5.5;
		t.source = "Rplist0_json.img_plist0_img0";
		t.verticalCenter = 14;
		return t;
	};
	_proto._winNumShow_i = function () {
		var t = new UIGWinNumShow();
		this._winNumShow = t;
		t.skinName = "gWinNumShowSkin";
		t.x = 29;
		t.y = 28;
		return t;
	};
	_proto._gp_box_i = function () {
		var t = new eui.Group();
		this._gp_box = t;
		t.anchorOffsetX = 611.5;
		t.anchorOffsetY = 572.5;
		t.height = 1125;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1125;
		t.x = 611.5;
		t.y = 572.5;
		t.elementsContent = [this._box_i()];
		return t;
	};
	_proto._box_i = function () {
		var t = new eui.Image();
		this._box = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 23;
		t.source = "Rplist1_json.img_plist1_img24";
		t.x = 375;
		t.y = 571;
		return t;
	};
	_proto._btn_i = function () {
		var t = new eui.Button();
		this._btn = t;
		t.label = "Button";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 25;
		t.y = 1066;
		return t;
	};
	_proto._btn0_i = function () {
		var t = new eui.Button();
		this._btn0 = t;
		t.label = "Button";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1027;
		t.y = 1076;
		return t;
	};
	return testSkin;
})(eui.Skin);generateEUI.paths['resource/skin/tipsSkinSkin.exml'] = window.tipsSkinSkin = (function (_super) {
	__extends(tipsSkinSkin, _super);
	function tipsSkinSkin() {
		_super.call(this);
		this.skinParts = ["_img","_wind"];
		
		this.height = 1125;
		this.width = 2000;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = tipsSkinSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.height = 1125;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.width = 2000;
		t.elementsContent = [this._img_i()];
		return t;
	};
	_proto._img_i = function () {
		var t = new eui.Image();
		this._img = t;
		t.source = "Rplist0_json.font_plist0_beginBet";
		t.touchEnabled = false;
		t.x = 554;
		t.y = 467;
		return t;
	};
	return tipsSkinSkin;
})(eui.Skin);