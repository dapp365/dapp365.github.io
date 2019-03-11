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
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
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
})(eui.Skin);generateEUI.paths['resource/skin/allOpen/allOpenSkin.exml'] = window.allOpenSkin = (function (_super) {
	__extends(allOpenSkin, _super);
	function allOpenSkin() {
		_super.call(this);
		this.skinParts = ["_gp_act","_btn_stop","_font_now","_scr_group","_scr","_wind"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = allOpenSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._gp_act_i(),this._btn_stop_i(),this._font_now_i(),this._scr_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._gp_act_i = function () {
		var t = new eui.Group();
		this._gp_act = t;
		t.height = 322;
		t.left = 409;
		t.top = 380;
		t.width = 297;
		return t;
	};
	_proto._btn_stop_i = function () {
		var t = new eui.Image();
		this._btn_stop = t;
		t.bottom = 390;
		t.left = 408;
		t.source = "plist0_json.btn_plist0_tzgj";
		return t;
	};
	_proto._font_now_i = function () {
		var t = new eui.Label();
		this._font_now = t;
		t.bold = true;
		t.bottom = 922;
		t.left = 247;
		t.size = 60;
		t.text = "正在刮第5张“鸿运当头”";
		t.textColor = 0xfffb00;
		return t;
	};
	_proto._scr_i = function () {
		var t = new eui.Scroller();
		this._scr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 376;
		t.left = 0;
		t.right = 0;
		t.y = 912;
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
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	return allOpenSkin;
})(eui.Skin);generateEUI.paths['resource/skin/buyCard/buyCardSkin.exml'] = window.buyCardSkin = (function (_super) {
	__extends(buyCardSkin, _super);
	var buyCardSkin$Skin1 = 	(function (_super) {
		__extends(buyCardSkin$Skin1, _super);
		function buyCardSkin$Skin1() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_minus1")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_minus2")
					])
			];
		}
		var _proto = buyCardSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_minus0";
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
		return buyCardSkin$Skin1;
	})(eui.Skin);

	var buyCardSkin$Skin2 = 	(function (_super) {
		__extends(buyCardSkin$Skin2, _super);
		function buyCardSkin$Skin2() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_add1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = buyCardSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_add0";
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
		return buyCardSkin$Skin2;
	})(eui.Skin);

	var buyCardSkin$Skin3 = 	(function (_super) {
		__extends(buyCardSkin$Skin3, _super);
		function buyCardSkin$Skin3() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_btnbg1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = buyCardSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_btnbg0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 48;
			t.verticalCenter = 0;
			return t;
		};
		return buyCardSkin$Skin3;
	})(eui.Skin);

	function buyCardSkin() {
		_super.call(this);
		this.skinParts = ["cardShow","_img_card","_btn_back","_rect_up","_rect_down","_img_down","_btn_minus","_btn_add","_btn_buy","_bitLabel_num","_gp_down","_img_up","_wind"];
		
		this.height = 1810;
		this.width = 1125;
		this.cardShow_i();
		this.elementsContent = [this._wind_i()];
		
		eui.Binding.$bindProperties(this, ["_rect_up"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [-614],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["_rect_down"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [791],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [1135],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["_img_up"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [562.5],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [835.5],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [224.5],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, ["_gp_down"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [52],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [775],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [1118],[],this._Object8,"y");
	}
	var _proto = buyCardSkin.prototype;

	_proto.cardShow_i = function () {
		var t = new egret.tween.TweenGroup();
		this.cardShow = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To3_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set4_i(),this._To4_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._img_card_i(),this._btn_back_i(),this._rect_up_i(),this._rect_down_i(),this._gp_down_i(),this._img_up_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "bg_bg2_png";
		t.verticalCenter = -196;
		return t;
	};
	_proto._img_card_i = function () {
		var t = new eui.Image();
		this._img_card = t;
		t.anchorOffsetX = 538.5;
		t.anchorOffsetY = 777;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "bg_card0_all_png";
		t.x = 563;
		t.y = 633;
		return t;
	};
	_proto._btn_back_i = function () {
		var t = new eui.Image();
		this._btn_back = t;
		t.horizontalCenter = 0;
		t.source = "plist0_json.btn_plist0_sdbm";
		t.y = 1652;
		return t;
	};
	_proto._rect_up_i = function () {
		var t = new eui.Rect();
		this._rect_up = t;
		t.alpha = 1;
		t.height = 791;
		t.width = 1125;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._rect_down_i = function () {
		var t = new eui.Rect();
		this._rect_down = t;
		t.alpha = 1;
		t.height = 1019;
		t.width = 1125;
		t.x = 0;
		t.y = 791;
		return t;
	};
	_proto._gp_down_i = function () {
		var t = new eui.Group();
		this._gp_down = t;
		t.x = 52;
		t.y = 775;
		t.elementsContent = [this._img_down_i(),this._btn_minus_i(),this._btn_add_i(),this._btn_buy_i(),this._bitLabel_num_i()];
		return t;
	};
	_proto._img_down_i = function () {
		var t = new eui.Image();
		this._img_down = t;
		t.anchorOffsetX = 510.5;
		t.anchorOffsetY = 210;
		t.source = "bg_bg8_png";
		t.x = 510.5;
		t.y = 224;
		return t;
	};
	_proto._btn_minus_i = function () {
		var t = new eui.Button();
		this._btn_minus = t;
		t.label = "";
		t.x = 143;
		t.y = 0;
		t.skinName = buyCardSkin$Skin1;
		return t;
	};
	_proto._btn_add_i = function () {
		var t = new eui.Button();
		this._btn_add = t;
		t.label = "";
		t.x = 691;
		t.y = 0;
		t.skinName = buyCardSkin$Skin2;
		return t;
	};
	_proto._btn_buy_i = function () {
		var t = new eui.Button();
		this._btn_buy = t;
		t.label = "购买(50EOS)";
		t.x = 298;
		t.y = 195;
		t.skinName = buyCardSkin$Skin3;
		return t;
	};
	_proto._bitLabel_num_i = function () {
		var t = new eui.BitmapLabel();
		this._bitLabel_num = t;
		t.font = "buy_fnt";
		t.right = 411;
		t.text = "99z";
		t.y = 40;
		return t;
	};
	_proto._img_up_i = function () {
		var t = new eui.Image();
		this._img_up = t;
		t.anchorOffsetX = 505.5;
		t.anchorOffsetY = 185.5;
		t.source = "bg_bg7_png";
		t.x = 562.5;
		t.y = 835.5;
		return t;
	};
	return buyCardSkin;
})(eui.Skin);generateEUI.paths['resource/skin/dazibao/dazibaoSkin.exml'] = window.dazibaoSkin = (function (_super) {
	__extends(dazibaoSkin, _super);
	var dazibaoSkin$Skin4 = 	(function (_super) {
		__extends(dazibaoSkin$Skin4, _super);
		function dazibaoSkin$Skin4() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_zfq1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = dazibaoSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_zfq0";
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
		return dazibaoSkin$Skin4;
	})(eui.Skin);

	function dazibaoSkin() {
		_super.call(this);
		this.skinParts = ["_font_winMoney","_font_winName","_font_Data","_font_week","_font_cardName","_img_card","_btn_toBuy","_btn_close","_fontWin","_wind"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = dazibaoSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this._font_winMoney_i(),this._font_winName_i(),this._font_Data_i(),this._font_week_i(),this._Label2_i(),this._font_cardName_i(),this._img_card_i(),this._btn_toBuy_i(),this._btn_close_i(),this._fontWin_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 463;
		t.left = 148;
		t.source = "bg_bg6_png";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 1231;
		t.left = 211;
		t.size = 115;
		t.stroke = 3;
		t.strokeColor = 0x9a251d;
		t.text = "大奖播报";
		t.textAlign = "left";
		t.textColor = 0x9a251d;
		return t;
	};
	_proto._font_winMoney_i = function () {
		var t = new eui.Label();
		this._font_winMoney = t;
		t.bold = true;
		t.bottom = 822;
		t.left = 216;
		t.size = 115;
		t.stroke = 3;
		t.strokeColor = 0x9A251D;
		t.text = "50EOS";
		t.textAlign = "left";
		t.textColor = 0x9A251D;
		return t;
	};
	_proto._font_winName_i = function () {
		var t = new eui.Label();
		this._font_winName = t;
		t.bold = true;
		t.bottom = 1086;
		t.left = 213;
		t.size = 54;
		t.strokeColor = 0x9A251D;
		t.text = "恭喜51****lydapp";
		t.textAlign = "left";
		t.textColor = 0x9A251D;
		return t;
	};
	_proto._font_Data_i = function () {
		var t = new eui.Label();
		this._font_Data = t;
		t.bottom = 1305;
		t.right = 161;
		t.size = 54;
		t.strokeColor = 0x9A251D;
		t.text = "19-02-27";
		t.textAlign = "left";
		t.textColor = 0x9A251D;
		return t;
	};
	_proto._font_week_i = function () {
		var t = new eui.Label();
		this._font_week = t;
		t.bottom = 1230;
		t.right = 161;
		t.size = 54;
		t.strokeColor = 0x9A251D;
		t.text = "星期三";
		t.textAlign = "left";
		t.textColor = 0x9A251D;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 983;
		t.left = 214;
		t.size = 73;
		t.strokeColor = 0x9A251D;
		t.text = "刮中";
		t.textAlign = "left";
		t.textColor = 0x9A251D;
		return t;
	};
	_proto._font_cardName_i = function () {
		var t = new eui.Label();
		this._font_cardName = t;
		t.bold = true;
		t.bottom = 983;
		t.left = 362;
		t.size = 73;
		t.strokeColor = 0x9A251D;
		t.text = "鸿运当头";
		t.textAlign = "left";
		t.textColor = 0xc203d3;
		return t;
	};
	_proto._img_card_i = function () {
		var t = new eui.Image();
		this._img_card = t;
		t.horizontalCenter = 293;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "plist1_json.img_plist1_img10";
		t.verticalCenter = -74.5;
		return t;
	};
	_proto._btn_toBuy_i = function () {
		var t = new eui.Button();
		this._btn_toBuy = t;
		t.bottom = 470;
		t.label = "";
		t.left = 449;
		t.skinName = dazibaoSkin$Skin4;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Image();
		this._btn_close = t;
		t.bottom = 281;
		t.left = 502;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "plist0_json.btn_plist0_close";
		t.x = 502;
		t.y = 1408.0000000000002;
		return t;
	};
	_proto._fontWin_i = function () {
		var t = new eui.Label();
		this._fontWin = t;
		t.horizontalCenter = 343.5;
		t.rotation = 45;
		t.text = "中奖100EOS";
		t.textAlign = "center";
		t.verticalCenter = -144;
		return t;
	};
	return dazibaoSkin;
})(eui.Skin);generateEUI.paths['resource/skin/fontTipsSkin.exml'] = window.fontTipsSkin = (function (_super) {
	__extends(fontTipsSkin, _super);
	function fontTipsSkin() {
		_super.call(this);
		this.skinParts = ["_rect_bg","_font","_act","_wind"];
		
		this.height = 1810;
		this.width = 1125;
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
		t.horizontalCenter = 0;
		t.y = 570;
		t.elementsContent = [this._rect_bg_i(),this._font_i()];
		return t;
	};
	_proto._rect_bg_i = function () {
		var t = new eui.Rect();
		this._rect_bg = t;
		t.ellipseHeight = 64;
		t.ellipseWidth = 64;
		t.height = 70;
		t.horizontalCenter = 0;
		t.width = 473;
		t.y = 0;
		return t;
	};
	_proto._font_i = function () {
		var t = new eui.Label();
		this._font = t;
		t.horizontalCenter = -0.5;
		t.size = 40;
		t.text = "余额不足，无法下注";
		t.y = 15;
		return t;
	};
	return fontTipsSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/gameCard0ItemSkin.exml'] = window.gameCard0ItemSkin = (function (_super) {
	__extends(gameCard0ItemSkin, _super);
	function gameCard0ItemSkin() {
		_super.call(this);
		this.skinParts = ["_rect0","_rect1","_rect2","_rect3","_rect4","_gp_rect","_font_door","_font_open0_0","_font_open0_1","_font_open0_2","_font_open0_3","_img_win","_wind"];
		
		this.height = 82;
		this.width = 892;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gameCard0ItemSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._gp_rect_i(),this._font_door_i(),this._font_open0_0_i(),this._font_open0_1_i(),this._font_open0_2_i(),this._font_open0_3_i(),this._img_win_i()];
		return t;
	};
	_proto._gp_rect_i = function () {
		var t = new eui.Group();
		this._gp_rect = t;
		t.x = 116;
		t.y = -26;
		t.elementsContent = [this._rect0_i(),this._rect1_i(),this._rect2_i(),this._rect3_i(),this._rect4_i()];
		return t;
	};
	_proto._rect0_i = function () {
		var t = new eui.Rect();
		this._rect0 = t;
		t.ellipseHeight = 200;
		t.ellipseWidth = 200;
		t.fillColor = 0xffe21e;
		t.height = 135;
		t.width = 135;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._rect1_i = function () {
		var t = new eui.Rect();
		this._rect1 = t;
		t.ellipseHeight = 200;
		t.ellipseWidth = 200;
		t.fillColor = 0xFFE21E;
		t.height = 135;
		t.width = 135;
		t.x = 163;
		t.y = 0;
		return t;
	};
	_proto._rect2_i = function () {
		var t = new eui.Rect();
		this._rect2 = t;
		t.ellipseHeight = 200;
		t.ellipseWidth = 200;
		t.fillColor = 0xFFE21E;
		t.height = 135;
		t.width = 135;
		t.x = 322;
		t.y = 0;
		return t;
	};
	_proto._rect3_i = function () {
		var t = new eui.Rect();
		this._rect3 = t;
		t.ellipseHeight = 200;
		t.ellipseWidth = 200;
		t.fillColor = 0xFFE21E;
		t.height = 135;
		t.width = 135;
		t.x = 484;
		t.y = 0;
		return t;
	};
	_proto._rect4_i = function () {
		var t = new eui.Rect();
		this._rect4 = t;
		t.ellipseHeight = 200;
		t.ellipseWidth = 200;
		t.fillColor = 0xFFE21E;
		t.height = 135;
		t.width = 135;
		t.x = 648;
		t.y = 0;
		return t;
	};
	_proto._font_door_i = function () {
		var t = new eui.BitmapLabel();
		this._font_door = t;
		t.font = "card0Door_fnt";
		t.horizontalCenter = -400.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "99";
		t.verticalCenter = 3;
		return t;
	};
	_proto._font_open0_0_i = function () {
		var t = new eui.BitmapLabel();
		this._font_open0_0 = t;
		t.font = "card0Font_fnt";
		t.horizontalCenter = -262.5;
		t.text = "16";
		t.verticalCenter = 2;
		return t;
	};
	_proto._font_open0_1_i = function () {
		var t = new eui.BitmapLabel();
		this._font_open0_1 = t;
		t.font = "card0Font_fnt";
		t.horizontalCenter = -100.5;
		t.text = "16";
		t.verticalCenter = 2;
		return t;
	};
	_proto._font_open0_2_i = function () {
		var t = new eui.BitmapLabel();
		this._font_open0_2 = t;
		t.font = "card0Font_fnt";
		t.horizontalCenter = 61.5;
		t.text = "16";
		t.verticalCenter = 2;
		return t;
	};
	_proto._font_open0_3_i = function () {
		var t = new eui.BitmapLabel();
		this._font_open0_3 = t;
		t.font = "card0Font_fnt";
		t.horizontalCenter = 223.5;
		t.text = "16";
		t.verticalCenter = 2;
		return t;
	};
	_proto._img_win_i = function () {
		var t = new eui.Image();
		this._img_win = t;
		t.horizontalCenter = 386;
		t.source = "card0plist_json.img_card0_eos1000";
		t.verticalCenter = 0;
		return t;
	};
	return gameCard0ItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/gameCard0BgSkin.exml'] = window.gameCard0BgSkin = (function (_super) {
	__extends(gameCard0BgSkin, _super);
	function gameCard0BgSkin() {
		_super.call(this);
		this.skinParts = ["_UIGameCard0Item0","_UIGameCard0Item1","_UIGameCard0Item2","_UIGameCard0Item3","_UIGameCard0Item4","_rect0","_rect1","_rect2","_rect3","_rect4","_gp_rect","_wind"];
		
		this.height = 837;
		this.width = 1003;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gameCard0BgSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._UIGameCard0Item0_i(),this._UIGameCard0Item1_i(),this._UIGameCard0Item2_i(),this._UIGameCard0Item3_i(),this._UIGameCard0Item4_i(),this._gp_rect_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_card0_guaBG_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._UIGameCard0Item0_i = function () {
		var t = new UIGameCard0Item();
		this._UIGameCard0Item0 = t;
		t.skinName = "gameCard0ItemSkin";
		t.x = 72;
		t.y = 45;
		return t;
	};
	_proto._UIGameCard0Item1_i = function () {
		var t = new UIGameCard0Item();
		this._UIGameCard0Item1 = t;
		t.skinName = "gameCard0ItemSkin";
		t.x = 72;
		t.y = 208;
		return t;
	};
	_proto._UIGameCard0Item2_i = function () {
		var t = new UIGameCard0Item();
		this._UIGameCard0Item2 = t;
		t.skinName = "gameCard0ItemSkin";
		t.x = 72;
		t.y = 370;
		return t;
	};
	_proto._UIGameCard0Item3_i = function () {
		var t = new UIGameCard0Item();
		this._UIGameCard0Item3 = t;
		t.skinName = "gameCard0ItemSkin";
		t.x = 72;
		t.y = 533;
		return t;
	};
	_proto._UIGameCard0Item4_i = function () {
		var t = new UIGameCard0Item();
		this._UIGameCard0Item4 = t;
		t.skinName = "gameCard0ItemSkin";
		t.x = 72;
		t.y = 695;
		return t;
	};
	_proto._gp_rect_i = function () {
		var t = new eui.Group();
		this._gp_rect = t;
		t.x = 10;
		t.y = 11;
		t.elementsContent = [this._rect0_i(),this._rect1_i(),this._rect2_i(),this._rect3_i(),this._rect4_i()];
		return t;
	};
	_proto._rect0_i = function () {
		var t = new eui.Rect();
		this._rect0 = t;
		t.fillAlpha = 0.6;
		t.height = 165;
		t.width = 983;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._rect1_i = function () {
		var t = new eui.Rect();
		this._rect1 = t;
		t.fillAlpha = 0.6;
		t.height = 165;
		t.width = 983;
		t.x = 0;
		t.y = 164;
		return t;
	};
	_proto._rect2_i = function () {
		var t = new eui.Rect();
		this._rect2 = t;
		t.fillAlpha = 0.6;
		t.height = 165;
		t.width = 983;
		t.x = 0;
		t.y = 328;
		return t;
	};
	_proto._rect3_i = function () {
		var t = new eui.Rect();
		this._rect3 = t;
		t.fillAlpha = 0.6;
		t.height = 165;
		t.width = 983;
		t.x = 0;
		t.y = 492;
		return t;
	};
	_proto._rect4_i = function () {
		var t = new eui.Rect();
		this._rect4 = t;
		t.fillAlpha = 0.6;
		t.height = 165;
		t.width = 983;
		t.x = 0;
		t.y = 657;
		return t;
	};
	return gameCard0BgSkin;
})(eui.Skin);generateEUI.paths['resource/skin/game/gameCard0Skin.exml'] = window.gameCard0Skin = (function (_super) {
	__extends(gameCard0Skin, _super);
	function gameCard0Skin() {
		_super.call(this);
		this.skinParts = ["_card","_UIGameCard0Bg","_gp_bg","_gp_mask","_rect0","_img_noWin","_gp_noWin","_wind"];
		
		this.height = 1444;
		this.width = 1000;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = gameCard0Skin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._card_i(),this._gp_bg_i(),this._gp_mask_i(),this._gp_noWin_i()];
		return t;
	};
	_proto._card_i = function () {
		var t = new eui.Image();
		this._card = t;
		t.height = 1444;
		t.source = "bg_card0_all_png";
		t.width = 1000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_bg_i = function () {
		var t = new eui.Group();
		this._gp_bg = t;
		t.height = 837;
		t.scaleX = 0.928;
		t.scaleY = 0.93;
		t.width = 1003;
		t.x = 36;
		t.y = 440;
		t.elementsContent = [this._UIGameCard0Bg_i()];
		return t;
	};
	_proto._UIGameCard0Bg_i = function () {
		var t = new UIGameCard0Bg();
		this._UIGameCard0Bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "gameCard0BgSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_mask_i = function () {
		var t = new eui.Group();
		this._gp_mask = t;
		t.height = 837;
		t.scaleX = 0.928;
		t.scaleY = 0.93;
		t.width = 1003;
		t.x = 36;
		t.y = 440;
		return t;
	};
	_proto._gp_noWin_i = function () {
		var t = new eui.Group();
		this._gp_noWin = t;
		t.height = 837;
		t.scaleX = 0.928;
		t.scaleY = 0.93;
		t.width = 1003;
		t.x = 36;
		t.y = 440;
		t.elementsContent = [this._rect0_i(),this._img_noWin_i()];
		return t;
	};
	_proto._rect0_i = function () {
		var t = new eui.Rect();
		this._rect0 = t;
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._img_noWin_i = function () {
		var t = new eui.Image();
		this._img_noWin = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.0775862068965516;
		t.scaleY = 1.075268817204301;
		t.source = "plist1_json.img_plist1_img11";
		t.verticalCenter = 0;
		t.x = 275.8620689655172;
		t.y = 102.15053763440864;
		return t;
	};
	return gameCard0Skin;
})(eui.Skin);generateEUI.paths['resource/skin/game/gameSkin.exml'] = window.gameSkin = (function (_super) {
	__extends(gameSkin, _super);
	var gameSkin$Skin5 = 	(function (_super) {
		__extends(gameSkin$Skin5, _super);
		function gameSkin$Skin5() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_zmyz1")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_yjgj2")
					])
			];
		}
		var _proto = gameSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_zmyz0";
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
		return gameSkin$Skin5;
	})(eui.Skin);

	var gameSkin$Skin6 = 	(function (_super) {
		__extends(gameSkin$Skin6, _super);
		function gameSkin$Skin6() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_close1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_close0";
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
		return gameSkin$Skin6;
	})(eui.Skin);

	var gameSkin$Skin7 = 	(function (_super) {
		__extends(gameSkin$Skin7, _super);
		function gameSkin$Skin7() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_gxyz1")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_gxyz2")
					])
			];
		}
		var _proto = gameSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_gxyz0";
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
		return gameSkin$Skin7;
	})(eui.Skin);

	var gameSkin$Skin8 = 	(function (_super) {
		__extends(gameSkin$Skin8, _super);
		function gameSkin$Skin8() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_yjgj1")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_yjgj2")
					])
			];
		}
		var _proto = gameSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_yjgj0";
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
		return gameSkin$Skin8;
	})(eui.Skin);

	var gameSkin$Skin9 = 	(function (_super) {
		__extends(gameSkin$Skin9, _super);
		function gameSkin$Skin9() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_dj1")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_dj2")
					])
			];
		}
		var _proto = gameSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_dj0";
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
		return gameSkin$Skin9;
	})(eui.Skin);

	var gameSkin$Skin10 = 	(function (_super) {
		__extends(gameSkin$Skin10, _super);
		function gameSkin$Skin10() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_gxyz1")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_gxyz2")
					])
			];
		}
		var _proto = gameSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_gxyz0";
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
		return gameSkin$Skin10;
	})(eui.Skin);

	var gameSkin$Skin11 = 	(function (_super) {
		__extends(gameSkin$Skin11, _super);
		function gameSkin$Skin11() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_move1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_move0";
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
		return gameSkin$Skin11;
	})(eui.Skin);

	function gameSkin() {
		_super.call(this);
		this.skinParts = ["_scr_group","_scr","_btn_zmyz","_btn_close","_btn_openNext","_gp_open","_btn_yjgj","_btn_dj","_btn_xcg","_gp_guajiang","_btn_scaleBig","_btn_scaleLittle","_moveBg","_btn_move","_gp_btn_move","_gp_move","_gp_move_tip","_wind"];
		
		this.height = 1810;
		this.width = 1125;
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
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._scr_i(),this._gp_open_i(),this._gp_guajiang_i(),this._btn_scaleBig_i(),this._btn_scaleLittle_i(),this._gp_move_i(),this._gp_move_tip_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_bg0_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._scr_i = function () {
		var t = new eui.Scroller();
		this._scr = t;
		t.bounces = false;
		t.height = 1444;
		t.width = 1000;
		t.x = 63;
		t.y = 90;
		t.viewport = this._scr_group_i();
		return t;
	};
	_proto._scr_group_i = function () {
		var t = new eui.Group();
		this._scr_group = t;
		return t;
	};
	_proto._gp_open_i = function () {
		var t = new eui.Group();
		this._gp_open = t;
		t.x = 70;
		t.y = 1582;
		t.elementsContent = [this._btn_zmyz_i(),this._btn_close_i(),this._btn_openNext_i()];
		return t;
	};
	_proto._btn_zmyz_i = function () {
		var t = new eui.Button();
		this._btn_zmyz = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = gameSkin$Skin5;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Button();
		this._btn_close = t;
		t.label = "";
		t.x = 351;
		t.y = 0;
		t.skinName = gameSkin$Skin6;
		return t;
	};
	_proto._btn_openNext_i = function () {
		var t = new eui.Button();
		this._btn_openNext = t;
		t.label = "";
		t.x = 702;
		t.y = 0;
		t.skinName = gameSkin$Skin7;
		return t;
	};
	_proto._gp_guajiang_i = function () {
		var t = new eui.Group();
		this._gp_guajiang = t;
		t.x = 68;
		t.y = 1582;
		t.elementsContent = [this._btn_yjgj_i(),this._btn_dj_i(),this._btn_xcg_i()];
		return t;
	};
	_proto._btn_yjgj_i = function () {
		var t = new eui.Button();
		this._btn_yjgj = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = gameSkin$Skin8;
		return t;
	};
	_proto._btn_dj_i = function () {
		var t = new eui.Button();
		this._btn_dj = t;
		t.label = "";
		t.x = 353;
		t.y = 0;
		t.skinName = gameSkin$Skin9;
		return t;
	};
	_proto._btn_xcg_i = function () {
		var t = new eui.Button();
		this._btn_xcg = t;
		t.label = "";
		t.x = 705;
		t.y = 0;
		t.skinName = gameSkin$Skin10;
		return t;
	};
	_proto._btn_scaleBig_i = function () {
		var t = new eui.Image();
		this._btn_scaleBig = t;
		t.source = "plist0_json.btn_plist0_salcBig";
		t.x = 998;
		t.y = 1470;
		return t;
	};
	_proto._btn_scaleLittle_i = function () {
		var t = new eui.Image();
		this._btn_scaleLittle = t;
		t.source = "plist0_json.btn_plist0_salclitte";
		t.x = 998;
		t.y = 1470;
		return t;
	};
	_proto._gp_move_i = function () {
		var t = new eui.Group();
		this._gp_move = t;
		t.x = 52.85;
		t.y = 1353.09;
		t.elementsContent = [this._moveBg_i(),this._btn_move_i(),this._gp_btn_move_i()];
		return t;
	};
	_proto._moveBg_i = function () {
		var t = new eui.Image();
		this._moveBg = t;
		t.source = "plist0_json.img_plist0_moveBg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_move_i = function () {
		var t = new eui.Button();
		this._btn_move = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 55;
		t.label = "";
		t.x = 95;
		t.y = 95;
		t.skinName = gameSkin$Skin11;
		return t;
	};
	_proto._gp_btn_move_i = function () {
		var t = new eui.Group();
		this._gp_btn_move = t;
		t.height = 190;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._gp_move_tip_i = function () {
		var t = new eui.Group();
		this._gp_move_tip = t;
		t.x = 287;
		t.y = 1398;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.height = 99;
		t.width = 445;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "拖动按钮可调整刮彩位置";
		t.verticalCenter = 0.5;
		return t;
	};
	return gameSkin;
})(eui.Skin);generateEUI.paths['resource/skin/hall/CpuNetProgressSkin.exml'] = window.CpuNetProgressSkin = (function (_super) {
	__extends(CpuNetProgressSkin, _super);
	function CpuNetProgressSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.height = 121;
		this.width = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = CpuNetProgressSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "plist0_json.img_plist0_cpunetbg";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(4,48,24,15);
		t.source = "plist0_json.img_plist0_cpu";
		t.percentWidth = 100;
		t.y = 0;
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
		t.visible = false;
		return t;
	};
	return CpuNetProgressSkin;
})(eui.Skin);generateEUI.paths['resource/skin/hall/hallCardItemSkin.exml'] = window.hallCardItemSkin = (function (_super) {
	__extends(hallCardItemSkin, _super);
	var hallCardItemSkin$Skin12 = 	(function (_super) {
		__extends(hallCardItemSkin$Skin12, _super);
		function hallCardItemSkin$Skin12() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_buyBg1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallCardItemSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_buyBg0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 36;
			t.verticalCenter = 0;
			return t;
		};
		return hallCardItemSkin$Skin12;
	})(eui.Skin);

	var hallCardItemSkin$Skin13 = 	(function (_super) {
		__extends(hallCardItemSkin$Skin13, _super);
		function hallCardItemSkin$Skin13() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_buyBg1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallCardItemSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_buyBg0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 36;
			t.verticalCenter = 0;
			return t;
		};
		return hallCardItemSkin$Skin13;
	})(eui.Skin);

	var hallCardItemSkin$Skin14 = 	(function (_super) {
		__extends(hallCardItemSkin$Skin14, _super);
		function hallCardItemSkin$Skin14() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_buyBg1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallCardItemSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_buyBg0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.size = 36;
			t.verticalCenter = 0;
			return t;
		};
		return hallCardItemSkin$Skin14;
	})(eui.Skin);

	function hallCardItemSkin() {
		_super.call(this);
		this.skinParts = ["_img_card0","_img_card1","_img_card2","_img_yy","_btn_money0","_btn_money1","_btn_money2","_wind"];
		
		this.height = 504;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = hallCardItemSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._img_card0_i(),this._img_card1_i(),this._img_card2_i(),this._img_yy_i(),this._btn_money0_i(),this._btn_money1_i(),this._btn_money2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(11,5,6,34);
		t.source = "plist0_json.img_plist0_img3";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(8,20,15,71);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "plist0_json.img_plist0_img0";
		t.x = 0;
		t.y = 389;
		return t;
	};
	_proto._img_card0_i = function () {
		var t = new eui.Image();
		this._img_card0 = t;
		t.horizontalCenter = -343.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "plist0_json.img_plist0_img1";
		t.verticalCenter = -31;
		return t;
	};
	_proto._img_card1_i = function () {
		var t = new eui.Image();
		this._img_card1 = t;
		t.horizontalCenter = -2.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "plist0_json.img_plist0_img12";
		t.verticalCenter = -31;
		return t;
	};
	_proto._img_card2_i = function () {
		var t = new eui.Image();
		this._img_card2 = t;
		t.horizontalCenter = 338.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "plist0_json.img_plist0_img13";
		t.verticalCenter = -31;
		return t;
	};
	_proto._img_yy_i = function () {
		var t = new eui.Image();
		this._img_yy = t;
		t.bottom = -44;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(11,5,6,34);
		t.source = "plist0_json.img_plist0_img3";
		return t;
	};
	_proto._btn_money0_i = function () {
		var t = new eui.Button();
		this._btn_money0 = t;
		t.bottom = 15;
		t.label = "0.1EOS";
		t.left = 110;
		t.skinName = hallCardItemSkin$Skin12;
		return t;
	};
	_proto._btn_money1_i = function () {
		var t = new eui.Button();
		this._btn_money1 = t;
		t.bottom = 15;
		t.label = "0.1EOS";
		t.left = 451;
		t.skinName = hallCardItemSkin$Skin13;
		return t;
	};
	_proto._btn_money2_i = function () {
		var t = new eui.Button();
		this._btn_money2 = t;
		t.bottom = 15;
		t.label = "0.1EOS";
		t.left = 802;
		t.skinName = hallCardItemSkin$Skin14;
		return t;
	};
	return hallCardItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/hall/hallLoginSkin.exml'] = window.hallLoginSkin = (function (_super) {
	__extends(hallLoginSkin, _super);
	var hallLoginSkin$Skin15 = 	(function (_super) {
		__extends(hallLoginSkin$Skin15, _super);
		function hallLoginSkin$Skin15() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_dr1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallLoginSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_dr0";
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
		return hallLoginSkin$Skin15;
	})(eui.Skin);

	var hallLoginSkin$Skin16 = 	(function (_super) {
		__extends(hallLoginSkin$Skin16, _super);
		function hallLoginSkin$Skin16() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_myScratchers1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallLoginSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_myScratchers0";
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
		return hallLoginSkin$Skin16;
	})(eui.Skin);

	function hallLoginSkin() {
		_super.call(this);
		this.skinParts = ["_btn_login","_cpuPro","_font_cpu","_netPro","_money","_font_net","_btn_MyCard","_login","_wind"];
		
		this.height = 253;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = hallLoginSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._btn_login_i(),this._login_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(15,31,16,191);
		t.source = "plist0_json.img_plist0_img2";
		return t;
	};
	_proto._btn_login_i = function () {
		var t = new eui.Button();
		this._btn_login = t;
		t.bottom = 0;
		t.horizontalCenter = 23.5;
		t.label = "";
		t.skinName = hallLoginSkin$Skin15;
		return t;
	};
	_proto._login_i = function () {
		var t = new eui.Group();
		this._login = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._cpuPro_i(),this._Label1_i(),this._font_cpu_i(),this._netPro_i(),this._Label2_i(),this._money_i(),this._font_net_i(),this._btn_MyCard_i(),this._Image2_i()];
		return t;
	};
	_proto._cpuPro_i = function () {
		var t = new eui.ProgressBar();
		this._cpuPro = t;
		t.bottom = 19;
		t.direction = "btt";
		t.left = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CpuNetProgressSkin";
		t.value = 30;
		t.x = 40;
		t.y = 113;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 67;
		t.left = 89;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "CPU";
		t.x = 89;
		t.y = 150;
		return t;
	};
	_proto._font_cpu_i = function () {
		var t = new eui.Label();
		this._font_cpu = t;
		t.horizontalCenter = -435;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "70%";
		t.textAlign = "center";
		t.x = 91;
		t.y = 189;
		return t;
	};
	_proto._netPro_i = function () {
		var t = new eui.ProgressBar();
		this._netPro = t;
		t.bottom = 19;
		t.direction = "btt";
		t.left = 222;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CpuNetProgressSkin";
		t.value = 30;
		t.x = 222;
		t.y = 113;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 68;
		t.left = 272;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "NET";
		t.x = 272;
		t.y = 149;
		return t;
	};
	_proto._money_i = function () {
		var t = new eui.Label();
		this._money = t;
		t.horizontalCenter = 461;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "1200EOS";
		t.textAlign = "center";
		t.y = 161;
		return t;
	};
	_proto._font_net_i = function () {
		var t = new eui.Label();
		this._font_net = t;
		t.horizontalCenter = -254;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "70%";
		t.textAlign = "center";
		t.x = 272;
		t.y = 189;
		return t;
	};
	_proto._btn_MyCard_i = function () {
		var t = new eui.Button();
		this._btn_MyCard = t;
		t.bottom = 0;
		t.horizontalCenter = 23.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 505;
		t.y = 90;
		t.skinName = hallLoginSkin$Skin16;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 42;
		t.left = 851;
		t.source = "plist0_json.img_plist0_eos";
		return t;
	};
	return hallLoginSkin;
})(eui.Skin);generateEUI.paths['resource/skin/hall/hallSkin.exml'] = window.hallSkin = (function (_super) {
	__extends(hallSkin, _super);
	var hallSkin$Skin17 = 	(function (_super) {
		__extends(hallSkin$Skin17, _super);
		function hallSkin$Skin17() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_dapp3651")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_dapp3650";
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
		return hallSkin$Skin17;
	})(eui.Skin);

	var hallSkin$Skin18 = 	(function (_super) {
		__extends(hallSkin$Skin18, _super);
		function hallSkin$Skin18() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_help1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_help0";
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
		return hallSkin$Skin18;
	})(eui.Skin);

	var hallSkin$Skin19 = 	(function (_super) {
		__extends(hallSkin$Skin19, _super);
		function hallSkin$Skin19() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_EN1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_EN0";
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
		return hallSkin$Skin19;
	})(eui.Skin);

	var hallSkin$Skin20 = 	(function (_super) {
		__extends(hallSkin$Skin20, _super);
		function hallSkin$Skin20() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_ZH1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_ZH0";
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
		return hallSkin$Skin20;
	})(eui.Skin);

	var hallSkin$Skin21 = 	(function (_super) {
		__extends(hallSkin$Skin21, _super);
		function hallSkin$Skin21() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_more1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hallSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_more0";
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
		return hallSkin$Skin21;
	})(eui.Skin);

	function hallSkin() {
		_super.call(this);
		this.skinParts = ["_bg","_scr_dataGroup","_scr","_font_title","_btn_home","_btn_help","_btn_lang_en","_btn_lang_zh","_btn_more","_font_bigwin","_UIHallLogin","_wind"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = hallSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._bg_i(),this._scr_i(),this._Image1_i(),this._font_title_i(),this._btn_home_i(),this._btn_help_i(),this._btn_lang_en_i(),this._btn_lang_zh_i(),this._btn_more_i(),this._font_bigwin_i(),this._UIHallLogin_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_hall_png";
		t.top = 0;
		return t;
	};
	_proto._scr_i = function () {
		var t = new eui.Scroller();
		this._scr = t;
		t.bottom = 176;
		t.bounces = false;
		t.left = 0;
		t.right = 0;
		t.top = 490;
		t.viewport = this._scr_dataGroup_i();
		return t;
	};
	_proto._scr_dataGroup_i = function () {
		var t = new eui.DataGroup();
		this._scr_dataGroup = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "plist0_json.img_plist0_slogan";
		t.top = 0;
		return t;
	};
	_proto._font_title_i = function () {
		var t = new eui.Label();
		this._font_title = t;
		t.bold = true;
		t.horizontalCenter = 7;
		t.lineSpacing = 20;
		t.size = 70;
		t.text = "大奖100万\n 小奖刮不断";
		t.textAlign = "center";
		t.textColor = 0xffdeac;
		t.width = 513;
		t.y = 133;
		return t;
	};
	_proto._btn_home_i = function () {
		var t = new eui.Button();
		this._btn_home = t;
		t.label = "";
		t.left = 40;
		t.top = 0;
		t.skinName = hallSkin$Skin17;
		return t;
	};
	_proto._btn_help_i = function () {
		var t = new eui.Button();
		this._btn_help = t;
		t.label = "";
		t.left = 170;
		t.top = 0;
		t.skinName = hallSkin$Skin18;
		return t;
	};
	_proto._btn_lang_en_i = function () {
		var t = new eui.Button();
		this._btn_lang_en = t;
		t.label = "";
		t.left = 855;
		t.top = 0;
		t.skinName = hallSkin$Skin19;
		return t;
	};
	_proto._btn_lang_zh_i = function () {
		var t = new eui.Button();
		this._btn_lang_zh = t;
		t.label = "";
		t.left = 855;
		t.top = 0;
		t.skinName = hallSkin$Skin20;
		return t;
	};
	_proto._btn_more_i = function () {
		var t = new eui.Button();
		this._btn_more = t;
		t.label = "";
		t.left = 995;
		t.top = 0;
		t.skinName = hallSkin$Skin21;
		return t;
	};
	_proto._font_bigwin_i = function () {
		var t = new eui.Label();
		this._font_bigwin = t;
		t.horizontalCenter = 0;
		t.text = "51****lydapp刮中鸿运当头50EOS";
		t.textAlign = "center";
		t.textColor = 0xfff21e;
		t.y = 435;
		return t;
	};
	_proto._UIHallLogin_i = function () {
		var t = new UIHallLogin();
		this._UIHallLogin = t;
		t.skinName = "hallLoginSkin";
		t.x = 0;
		t.y = 1557;
		return t;
	};
	return hallSkin;
})(eui.Skin);generateEUI.paths['resource/skin/hall/openDoorSkin.exml'] = window.openDoorSkin = (function (_super) {
	__extends(openDoorSkin, _super);
	function openDoorSkin() {
		_super.call(this);
		this.skinParts = ["_bg"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = openDoorSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._bg_i()];
		return t;
	};
	_proto._bg_i = function () {
		var t = new eui.Image();
		this._bg = t;
		t.source = "bg_loading_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return openDoorSkin;
})(eui.Skin);generateEUI.paths['resource/skin/loadSkin.exml'] = window.loadSkin = (function (_super) {
	__extends(loadSkin, _super);
	function loadSkin() {
		_super.call(this);
		this.skinParts = ["_font"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = loadSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._font_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_loading_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._font_i = function () {
		var t = new eui.Label();
		this._font = t;
		t.alpha = 0.7;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 90;
		t.text = "14%";
		t.textAlign = "center";
		t.textColor = 0x690700;
		t.top = 938;
		return t;
	};
	return loadSkin;
})(eui.Skin);generateEUI.paths['resource/skin/myCard/myCardBottomSkin.exml'] = window.myCardBottomSkin = (function (_super) {
	__extends(myCardBottomSkin, _super);
	var myCardBottomSkin$Skin22 = 	(function (_super) {
		__extends(myCardBottomSkin$Skin22, _super);
		function myCardBottomSkin$Skin22() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_buy1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = myCardBottomSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_buy0";
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
		return myCardBottomSkin$Skin22;
	})(eui.Skin);

	var myCardBottomSkin$Skin23 = 	(function (_super) {
		__extends(myCardBottomSkin$Skin23, _super);
		function myCardBottomSkin$Skin23() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_yijgj1")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_yijgj2")
					])
			];
		}
		var _proto = myCardBottomSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_yijgj0";
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
		return myCardBottomSkin$Skin23;
	})(eui.Skin);

	var myCardBottomSkin$Skin24 = 	(function (_super) {
		__extends(myCardBottomSkin$Skin24, _super);
		function myCardBottomSkin$Skin24() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_buy1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = myCardBottomSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_buy0";
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
		return myCardBottomSkin$Skin24;
	})(eui.Skin);

	function myCardBottomSkin() {
		_super.call(this);
		this.skinParts = ["_cpuPro","_font_cpu","_netPro","_font_net","_login","_btn_buy","_btn_yjgj","_gp_gua","_money","_btn_buy0","_gp_look","_wind"];
		
		this.height = 253;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = myCardBottomSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._login_i(),this._gp_gua_i(),this._gp_look_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(15,31,16,191);
		t.source = "plist0_json.img_plist0_img2";
		return t;
	};
	_proto._login_i = function () {
		var t = new eui.Group();
		this._login = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._cpuPro_i(),this._Label1_i(),this._font_cpu_i(),this._netPro_i(),this._Label2_i(),this._font_net_i()];
		return t;
	};
	_proto._cpuPro_i = function () {
		var t = new eui.ProgressBar();
		this._cpuPro = t;
		t.bottom = 19;
		t.direction = "btt";
		t.left = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CpuNetProgressSkin";
		t.value = 30;
		t.x = 40;
		t.y = 113;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 67;
		t.left = 89;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "CPU";
		t.x = 89;
		t.y = 150;
		return t;
	};
	_proto._font_cpu_i = function () {
		var t = new eui.Label();
		this._font_cpu = t;
		t.horizontalCenter = -435;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "70%";
		t.textAlign = "center";
		t.x = 91;
		t.y = 189;
		return t;
	};
	_proto._netPro_i = function () {
		var t = new eui.ProgressBar();
		this._netPro = t;
		t.bottom = 19;
		t.direction = "btt";
		t.left = 222;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CpuNetProgressSkin";
		t.value = 30;
		t.x = 222;
		t.y = 113;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 68;
		t.left = 272;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "NET";
		t.x = 272;
		t.y = 149;
		return t;
	};
	_proto._font_net_i = function () {
		var t = new eui.Label();
		this._font_net = t;
		t.horizontalCenter = -254;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "70%";
		t.textAlign = "center";
		t.x = 272;
		t.y = 189;
		return t;
	};
	_proto._gp_gua_i = function () {
		var t = new eui.Group();
		this._gp_gua = t;
		t.x = 389;
		t.y = 88;
		t.elementsContent = [this._btn_buy_i(),this._btn_yjgj_i()];
		return t;
	};
	_proto._btn_buy_i = function () {
		var t = new eui.Button();
		this._btn_buy = t;
		t.label = "";
		t.x = 466;
		t.y = 0;
		t.skinName = myCardBottomSkin$Skin22;
		return t;
	};
	_proto._btn_yjgj_i = function () {
		var t = new eui.Button();
		this._btn_yjgj = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = myCardBottomSkin$Skin23;
		return t;
	};
	_proto._gp_look_i = function () {
		var t = new eui.Group();
		this._gp_look = t;
		t.x = 441;
		t.y = 88;
		t.elementsContent = [this._money_i(),this._Image2_i(),this._btn_buy0_i()];
		return t;
	};
	_proto._money_i = function () {
		var t = new eui.Label();
		this._money = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "1200EOS";
		t.textAlign = "center";
		t.x = 504;
		t.y = 73;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "plist0_json.img_plist0_eos";
		t.x = 410;
		t.y = 47;
		return t;
	};
	_proto._btn_buy0_i = function () {
		var t = new eui.Button();
		this._btn_buy0 = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = myCardBottomSkin$Skin24;
		return t;
	};
	return myCardBottomSkin;
})(eui.Skin);generateEUI.paths['resource/skin/myCard/myCardItem2Skin.exml'] = window.myCardItem2Skin = (function (_super) {
	__extends(myCardItem2Skin, _super);
	var myCardItem2Skin$Skin25 = 	(function (_super) {
		__extends(myCardItem2Skin$Skin25, _super);
		function myCardItem2Skin$Skin25() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_zaimyz1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = myCardItem2Skin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_zaimyz0";
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
		return myCardItem2Skin$Skin25;
	})(eui.Skin);

	var myCardItem2Skin$Skin26 = 	(function (_super) {
		__extends(myCardItem2Skin$Skin26, _super);
		function myCardItem2Skin$Skin26() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_zaimyz1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = myCardItem2Skin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_zaimyz0";
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
		return myCardItem2Skin$Skin26;
	})(eui.Skin);

	function myCardItem2Skin() {
		_super.call(this);
		this.skinParts = ["_img_card0","_img_card1","_btn_open0","_btn_open1","_font0","_font1","_wind"];
		
		this.height = 607;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = myCardItem2Skin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._img_card0_i(),this._img_card1_i(),this._Image1_i(),this._btn_open0_i(),this._btn_open1_i(),this._font0_i(),this._font1_i()];
		return t;
	};
	_proto._img_card0_i = function () {
		var t = new eui.Image();
		this._img_card0 = t;
		t.bottom = 156;
		t.horizontalCenter = -246;
		t.source = "plist1_json.img_plist1_img17";
		return t;
	};
	_proto._img_card1_i = function () {
		var t = new eui.Image();
		this._img_card1 = t;
		t.bottom = 156;
		t.horizontalCenter = 247;
		t.source = "plist1_json.img_plist1_img17";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_bg4_png";
		t.x = 0;
		t.y = 451;
		return t;
	};
	_proto._btn_open0_i = function () {
		var t = new eui.Button();
		this._btn_open0 = t;
		t.horizontalCenter = -250.5;
		t.label = "";
		t.verticalCenter = 163.5;
		t.skinName = myCardItem2Skin$Skin25;
		return t;
	};
	_proto._btn_open1_i = function () {
		var t = new eui.Button();
		this._btn_open1 = t;
		t.horizontalCenter = 242.5;
		t.label = "";
		t.verticalCenter = 163.5;
		t.skinName = myCardItem2Skin$Skin26;
		return t;
	};
	_proto._font0_i = function () {
		var t = new eui.Label();
		this._font0 = t;
		t.bold = true;
		t.horizontalCenter = -161;
		t.rotation = 45;
		t.size = 42;
		t.text = "中奖100EOS";
		t.textAlign = "center";
		t.verticalCenter = -118;
		return t;
	};
	_proto._font1_i = function () {
		var t = new eui.Label();
		this._font1 = t;
		t.bold = true;
		t.horizontalCenter = 335;
		t.rotation = 45;
		t.size = 42;
		t.text = "中奖100EOS";
		t.textAlign = "center";
		t.verticalCenter = -118;
		return t;
	};
	return myCardItem2Skin;
})(eui.Skin);generateEUI.paths['resource/skin/myCard/myCardItemSkin.exml'] = window.myCardItemSkin = (function (_super) {
	__extends(myCardItemSkin, _super);
	var myCardItemSkin$Skin27 = 	(function (_super) {
		__extends(myCardItemSkin$Skin27, _super);
		function myCardItemSkin$Skin27() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_getScratchers1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = myCardItemSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_getScratchers0";
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
		return myCardItemSkin$Skin27;
	})(eui.Skin);

	var myCardItemSkin$Skin28 = 	(function (_super) {
		__extends(myCardItemSkin$Skin28, _super);
		function myCardItemSkin$Skin28() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_getScratchers1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = myCardItemSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_getScratchers0";
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
		return myCardItemSkin$Skin28;
	})(eui.Skin);

	function myCardItemSkin() {
		_super.call(this);
		this.skinParts = ["_img_card0","_img_card1","_btn_open0","_btn_open1","_wind"];
		
		this.height = 607;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = myCardItemSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._img_card0_i(),this._img_card1_i(),this._Image1_i(),this._btn_open0_i(),this._btn_open1_i()];
		return t;
	};
	_proto._img_card0_i = function () {
		var t = new eui.Image();
		this._img_card0 = t;
		t.left = 89;
		t.source = "plist1_json.img_plist1_img13";
		t.top = 66;
		return t;
	};
	_proto._img_card1_i = function () {
		var t = new eui.Image();
		this._img_card1 = t;
		t.source = "plist1_json.img_plist1_img13";
		t.top = 66;
		t.x = 582;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_bg4_png";
		t.x = 0;
		t.y = 451;
		return t;
	};
	_proto._btn_open0_i = function () {
		var t = new eui.Button();
		this._btn_open0 = t;
		t.label = "";
		t.x = 230;
		t.y = 385;
		t.skinName = myCardItemSkin$Skin27;
		return t;
	};
	_proto._btn_open1_i = function () {
		var t = new eui.Button();
		this._btn_open1 = t;
		t.label = "";
		t.x = 723;
		t.y = 385;
		t.skinName = myCardItemSkin$Skin28;
		return t;
	};
	return myCardItemSkin;
})(eui.Skin);generateEUI.paths['resource/skin/myCard/myCardSkin.exml'] = window.myCardSkin = (function (_super) {
	__extends(myCardSkin, _super);
	var myCardSkin$Skin29 = 	(function (_super) {
		__extends(myCardSkin$Skin29, _super);
		function myCardSkin$Skin29() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_back1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = myCardSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_back0";
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
		return myCardSkin$Skin29;
	})(eui.Skin);

	var myCardSkin$Skin30 = 	(function (_super) {
		__extends(myCardSkin$Skin30, _super);
		function myCardSkin$Skin30() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_ydj1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = myCardSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_ydj0";
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
		return myCardSkin$Skin30;
	})(eui.Skin);

	var myCardSkin$Skin31 = 	(function (_super) {
		__extends(myCardSkin$Skin31, _super);
		function myCardSkin$Skin31() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_dgj1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = myCardSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_dgj0";
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
		return myCardSkin$Skin31;
	})(eui.Skin);

	function myCardSkin() {
		_super.call(this);
		this.skinParts = ["_scr_dataGroup","_scr","_img_null","_img_img","_btn_back","_UIHallLogin","_radio_over","_radio_wait","_wind"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = myCardSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._scr_i(),this._img_null_i(),this._img_img_i(),this._btn_back_i(),this._UIHallLogin_i(),this._radio_over_i(),this._radio_wait_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_bg1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "plist1_json.img_plist1_img12";
		t.x = 276;
		t.y = 0;
		return t;
	};
	_proto._scr_i = function () {
		var t = new eui.Scroller();
		this._scr = t;
		t.bottom = 176;
		t.bounces = false;
		t.left = 0;
		t.right = 0;
		t.top = 340;
		t.viewport = this._scr_dataGroup_i();
		return t;
	};
	_proto._scr_dataGroup_i = function () {
		var t = new eui.DataGroup();
		this._scr_dataGroup = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._img_null_i = function () {
		var t = new eui.Image();
		this._img_null = t;
		t.horizontalCenter = 4.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "plist1_json.img_plist1_img2";
		t.verticalCenter = 171.5;
		return t;
	};
	_proto._img_img_i = function () {
		var t = new eui.Image();
		this._img_img = t;
		t.horizontalCenter = 0;
		t.source = "plist1_json.img_plist1_img3";
		t.verticalCenter = -186;
		return t;
	};
	_proto._btn_back_i = function () {
		var t = new eui.Button();
		this._btn_back = t;
		t.label = "";
		t.left = 30;
		t.top = 0;
		t.skinName = myCardSkin$Skin29;
		return t;
	};
	_proto._UIHallLogin_i = function () {
		var t = new UIMyCardBottom();
		this._UIHallLogin = t;
		t.bottom = 0;
		t.left = 0;
		t.skinName = "myCardBottomSkin";
		return t;
	};
	_proto._radio_over_i = function () {
		var t = new eui.RadioButton();
		this._radio_over = t;
		t.label = "";
		t.x = 622;
		t.y = 248;
		t.skinName = myCardSkin$Skin30;
		return t;
	};
	_proto._radio_wait_i = function () {
		var t = new eui.RadioButton();
		this._radio_wait = t;
		t.label = "";
		t.selected = true;
		t.x = 138;
		t.y = 248;
		t.skinName = myCardSkin$Skin31;
		return t;
	};
	return myCardSkin;
})(eui.Skin);generateEUI.paths['resource/skin/tips/equitySkin.exml'] = window.equitySkin = (function (_super) {
	__extends(equitySkin, _super);
	function equitySkin() {
		_super.call(this);
		this.skinParts = ["_title","_font_tips1","_font_tips2","_btn_iknow","_btn_close","_font_tips0","_font_tips3","_font_tips4","_font_tips5","_font_copy","_bg_seed","_wind"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = equitySkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._title_i(),this._font_tips1_i(),this._font_tips2_i(),this._Rect2_i(),this._Rect3_i(),this._btn_iknow_i(),this._btn_close_i(),this._font_tips0_i(),this._font_tips3_i(),this._font_tips4_i(),this._font_tips5_i(),this._bg_seed_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1242;
		t.left = 110;
		t.scale9Grid = new egret.Rectangle(253,209,103,102);
		t.source = "bg_bg10_png";
		t.top = 175;
		t.width = 905;
		return t;
	};
	_proto._title_i = function () {
		var t = new eui.Image();
		this._title = t;
		t.left = 474;
		t.source = "plist0_json.img_plist0_img7";
		t.top = 252;
		return t;
	};
	_proto._font_tips1_i = function () {
		var t = new eui.Label();
		this._font_tips1 = t;
		t.left = 205;
		t.lineSpacing = 10;
		t.size = 36;
		t.text = "每一局向玩家开放投注前，服务端将生成一个随机数种子，用此种子生成随后要开出的结果。然后将此种子签名后交给智能合约（可以在链上查询）和玩家（可以在本页看到），以便随后验证对比。";
		t.textAlign = "left";
		t.textColor = 0xCAADBD;
		t.top = 473;
		t.width = 753;
		return t;
	};
	_proto._font_tips2_i = function () {
		var t = new eui.Label();
		this._font_tips2 = t;
		t.left = 205;
		t.lineSpacing = 10;
		t.size = 36;
		t.text = "当一局结束时，服务端将会把原始种子展示出来，从而证明了系统在整个过程中并未修改种子，杜绝了系统作弊的可能。";
		t.textAlign = "left";
		t.textColor = 0xCAADBD;
		t.top = 726;
		t.width = 753;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xcaadbd;
		t.height = 18;
		t.left = 162;
		t.top = 485;
		t.width = 18;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xCAADBD;
		t.height = 18;
		t.left = 162;
		t.top = 736;
		t.width = 18;
		return t;
	};
	_proto._btn_iknow_i = function () {
		var t = new eui.Image();
		this._btn_iknow = t;
		t.left = 413;
		t.source = "plist0_json.img_plist0_img10";
		t.top = 1211;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Image();
		this._btn_close = t;
		t.left = 502;
		t.source = "plist0_json.btn_plist0_close";
		t.top = 1510;
		return t;
	};
	_proto._font_tips0_i = function () {
		var t = new eui.Label();
		this._font_tips0 = t;
		t.left = 163;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.text = "链上可验证公平性";
		t.textAlign = "left";
		t.textColor = 0xFFFB00;
		t.top = 399;
		t.x = 164;
		t.y = 523;
		return t;
	};
	_proto._font_tips3_i = function () {
		var t = new eui.Label();
		this._font_tips3 = t;
		t.left = 163;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.text = "游戏ID:wwwwwwwwwwww";
		t.textAlign = "left";
		t.textColor = 0xFFFB00;
		t.top = 916;
		t.x = 174;
		return t;
	};
	_proto._font_tips4_i = function () {
		var t = new eui.Label();
		this._font_tips4 = t;
		t.left = 163;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.text = "本局种子签名";
		t.textAlign = "left";
		t.textColor = 0xFFFB00;
		t.top = 1020;
		t.x = 174;
		return t;
	};
	_proto._font_tips5_i = function () {
		var t = new eui.Label();
		this._font_tips5 = t;
		t.left = 163;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "WWEDKKKASKKKKDKSK";
		t.textAlign = "left";
		t.textColor = 0xFFFB00;
		t.top = 1094;
		t.x = 174;
		return t;
	};
	_proto._bg_seed_i = function () {
		var t = new eui.Group();
		this._bg_seed = t;
		t.left = 660;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 1036;
		t.elementsContent = [this._Rect4_i(),this._font_copy_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 24;
		t.ellipseWidth = 24;
		t.fillColor = 0xFF9C00;
		t.height = 90;
		t.width = 110;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._font_copy_i = function () {
		var t = new eui.Label();
		this._font_copy = t;
		t.size = 42;
		t.text = "复制";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.x = 16;
		t.y = 24;
		return t;
	};
	return equitySkin;
})(eui.Skin);generateEUI.paths['resource/skin/tips/helpSkin.exml'] = window.helpSkin = (function (_super) {
	__extends(helpSkin, _super);
	function helpSkin() {
		_super.call(this);
		this.skinParts = ["_title","_font_tips1","_font_tips2","_btn_iknow","_btn_close","_wind"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = helpSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._title_i(),this._font_tips1_i(),this._font_tips2_i(),this._Rect2_i(),this._Rect3_i(),this._btn_iknow_i(),this._btn_close_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 988;
		t.left = 116;
		t.scale9Grid = new egret.Rectangle(253,209,103,102);
		t.source = "bg_bg10_png";
		t.top = 305;
		t.width = 893;
		return t;
	};
	_proto._title_i = function () {
		var t = new eui.Image();
		this._title = t;
		t.left = 444;
		t.source = "plist0_json.img_plist0_img11";
		t.top = 376;
		return t;
	};
	_proto._font_tips1_i = function () {
		var t = new eui.Label();
		this._font_tips1 = t;
		t.left = 205;
		t.size = 36;
		t.text = "分享链接邀好友。若新用户从您的链接进入网站 并完成首次下注，则推荐成功。";
		t.textAlign = "left";
		t.textColor = 0xCAADBD;
		t.top = 837;
		t.width = 753;
		return t;
	};
	_proto._font_tips2_i = function () {
		var t = new eui.Label();
		this._font_tips2 = t;
		t.left = 205;
		t.size = 36;
		t.text = "被推荐人每次投注，推荐人都能得到投注金额的  5‰ 的作为佣金。";
		t.textAlign = "left";
		t.textColor = 0xCAADBD;
		t.top = 962;
		t.width = 753;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xcaadbd;
		t.height = 18;
		t.left = 162;
		t.top = 849;
		t.width = 18;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xCAADBD;
		t.height = 18;
		t.left = 162;
		t.top = 972;
		t.width = 18;
		return t;
	};
	_proto._btn_iknow_i = function () {
		var t = new eui.Image();
		this._btn_iknow = t;
		t.left = 413;
		t.source = "plist0_json.img_plist0_img10";
		t.top = 1105;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Image();
		this._btn_close = t;
		t.left = 502;
		t.source = "plist0_json.btn_plist0_close";
		t.top = 1390;
		return t;
	};
	return helpSkin;
})(eui.Skin);generateEUI.paths['resource/skin/tips/lossSkin.exml'] = window.lossSkin = (function (_super) {
	__extends(lossSkin, _super);
	function lossSkin() {
		_super.call(this);
		this.skinParts = ["_btn_close","_wind"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = lossSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._btn_close_i(),this._Image1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Image();
		this._btn_close = t;
		t.bottom = 400;
		t.left = 502;
		t.source = "plist0_json.btn_plist0_close";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 801;
		t.left = 355;
		t.source = "plist1_json.img_plist1_img11";
		return t;
	};
	return lossSkin;
})(eui.Skin);generateEUI.paths['resource/skin/tips/moreSkin.exml'] = window.moreSkin = (function (_super) {
	__extends(moreSkin, _super);
	var moreSkin$Skin32 = 	(function (_super) {
		__extends(moreSkin$Skin32, _super);
		function moreSkin$Skin32() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_moreClose1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = moreSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_moreClose0";
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
		return moreSkin$Skin32;
	})(eui.Skin);

	function moreSkin() {
		_super.call(this);
		this.skinParts = ["_close","_btn_close","_name","_back","_btn_Twitter","_btn_Telegram","_font_gpx","_gp_btn_gpx","_font_tjyj","_gp_btn_tjyj","_wind"];
		
		this.currentState = "login";
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
		this._name_i();
		
		this._Rect1_i();
		
		this._back_i();
		
		this.states = [
			new eui.State ("login",
				[
					new eui.AddItems("_name","_wind",2,"_btn_Twitter"),
					new eui.AddItems("_Rect1","_wind",2,"_btn_Twitter"),
					new eui.AddItems("_back","_wind",2,"_btn_Twitter"),
					new eui.SetProperty("_font_gpx","left",0),
					new eui.SetProperty("_font_tjyj","left",0)
				])
			,
			new eui.State ("logout",
				[
					new eui.SetProperty("_Image1","right",31),
					new eui.SetProperty("_Image1","top",136),
					new eui.SetProperty("_font_gpx","x",0),
					new eui.SetProperty("_font_gpx","y",3),
					new eui.SetProperty("_Image2","x",410),
					new eui.SetProperty("_Image2","y",0),
					new eui.SetProperty("_gp_btn_gpx","y",366),
					new eui.SetProperty("_font_tjyj","x",0),
					new eui.SetProperty("_font_tjyj","y",2),
					new eui.SetProperty("_Image3","x",413),
					new eui.SetProperty("_Image3","y",0),
					new eui.SetProperty("_gp_btn_tjyj","y",246)
				])
		];
	}
	var _proto = moreSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._close_i(),this._btn_close_i(),this._Image1_i(),this._btn_Twitter_i(),this._btn_Telegram_i(),this._gp_btn_gpx_i(),this._gp_btn_tjyj_i()];
		return t;
	};
	_proto._close_i = function () {
		var t = new eui.Rect();
		this._close = t;
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Button();
		this._btn_close = t;
		t.label = "";
		t.x = 985;
		t.y = 0;
		t.skinName = moreSkin$Skin32;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.right = 31;
		t.source = "bg_bg10_png";
		t.top = 136;
		return t;
	};
	_proto._name_i = function () {
		var t = new eui.Label();
		this._name = t;
		t.horizontalCenter = 141.5;
		t.size = 42;
		t.text = "51goplaydapp";
		t.textAlign = "center";
		t.textColor = 0xfffb00;
		t.y = 210;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0xc83f37;
		t.height = 37;
		t.left = 891;
		t.top = 213;
		t.width = 3;
		return t;
	};
	_proto._back_i = function () {
		var t = new eui.Label();
		this._back = t;
		t.left = 954;
		t.size = 42;
		t.text = "退出";
		t.textColor = 0xFFFB00;
		t.top = 212;
		return t;
	};
	_proto._btn_Twitter_i = function () {
		var t = new eui.Image();
		this._btn_Twitter = t;
		t.left = 719;
		t.source = "plist0_json.img_plist0_img4";
		t.top = 494;
		return t;
	};
	_proto._btn_Telegram_i = function () {
		var t = new eui.Image();
		this._btn_Telegram = t;
		t.left = 569;
		t.source = "plist0_json.img_plist0_img5";
		t.top = 494;
		return t;
	};
	_proto._gp_btn_gpx_i = function () {
		var t = new eui.Group();
		this._gp_btn_gpx = t;
		t.width = 456;
		t.x = 571;
		t.y = 402;
		t.elementsContent = [this._font_gpx_i(),this._Image2_i()];
		return t;
	};
	_proto._font_gpx_i = function () {
		var t = new eui.Label();
		this._font_gpx = t;
		t.size = 42;
		t.text = "公平性";
		t.textAlign = "center";
		t.textColor = 0xFFFB00;
		t.y = 3;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "plist0_json.img_plist0_img6";
		t.x = 410;
		t.y = 0;
		return t;
	};
	_proto._gp_btn_tjyj_i = function () {
		var t = new eui.Group();
		this._gp_btn_tjyj = t;
		t.width = 455;
		t.x = 571;
		t.y = 302;
		t.elementsContent = [this._font_tjyj_i(),this._Image3_i()];
		return t;
	};
	_proto._font_tjyj_i = function () {
		var t = new eui.Label();
		this._font_tjyj = t;
		t.size = 42;
		t.text = "推荐有奖";
		t.textAlign = "center";
		t.textColor = 0xFFFB00;
		t.y = 2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.source = "plist0_json.img_plist0_img8";
		t.x = 413;
		t.y = 0;
		return t;
	};
	return moreSkin;
})(eui.Skin);generateEUI.paths['resource/skin/tips/openCardWaitSkin.exml'] = window.openCardWaitSkin = (function (_super) {
	__extends(openCardWaitSkin, _super);
	function openCardWaitSkin() {
		_super.call(this);
		this.skinParts = ["_show_act","_wind"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = openCardWaitSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._show_act_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._show_act_i = function () {
		var t = new eui.Group();
		this._show_act = t;
		t.height = 578;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 480;
		return t;
	};
	return openCardWaitSkin;
})(eui.Skin);generateEUI.paths['resource/skin/tips/tjyjSkin.exml'] = window.tjyjSkin = (function (_super) {
	__extends(tjyjSkin, _super);
	function tjyjSkin() {
		_super.call(this);
		this.skinParts = ["_title","_font_mytuij","_font_tips","_font_copy","_font_url","_gp_url","_font_tips1","_font_tips2","_btn_iknow","_btn_close","_wind"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = tjyjSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._title_i(),this._font_mytuij_i(),this._font_tips_i(),this._gp_url_i(),this._font_tips1_i(),this._font_tips2_i(),this._Rect4_i(),this._Rect5_i(),this._btn_iknow_i(),this._btn_close_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 988;
		t.left = 116;
		t.scale9Grid = new egret.Rectangle(253,209,103,102);
		t.source = "bg_bg10_png";
		t.top = 305;
		t.width = 893;
		return t;
	};
	_proto._title_i = function () {
		var t = new eui.Image();
		this._title = t;
		t.left = 444;
		t.source = "plist0_json.img_plist0_img9";
		t.top = 376;
		return t;
	};
	_proto._font_mytuij_i = function () {
		var t = new eui.Label();
		this._font_mytuij = t;
		t.left = 164;
		t.size = 48;
		t.text = "我的推荐链接";
		t.textAlign = "left";
		t.textColor = 0xfffb00;
		t.top = 523;
		return t;
	};
	_proto._font_tips_i = function () {
		var t = new eui.Label();
		this._font_tips = t;
		t.left = 157;
		t.size = 48;
		t.text = "如何获得推荐奖励？";
		t.textAlign = "left";
		t.textColor = 0xFFFB00;
		t.top = 750;
		return t;
	};
	_proto._gp_url_i = function () {
		var t = new eui.Group();
		this._gp_url = t;
		t.bottom = 1119;
		t.left = 160;
		t.right = 154;
		t.top = 601;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this._font_copy_i(),this._font_url_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 24;
		t.ellipseWidth = 24;
		t.fillColor = 0x482438;
		t.height = 90;
		t.width = 670;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 24;
		t.ellipseWidth = 24;
		t.fillColor = 0xff9c00;
		t.height = 90;
		t.width = 110;
		t.x = 701;
		t.y = 0;
		return t;
	};
	_proto._font_copy_i = function () {
		var t = new eui.Label();
		this._font_copy = t;
		t.size = 42;
		t.text = "复制";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.x = 717;
		t.y = 24;
		return t;
	};
	_proto._font_url_i = function () {
		var t = new eui.Label();
		this._font_url = t;
		t.size = 36;
		t.text = "https://godapp.github.io/#/io/#/i...";
		t.textAlign = "left";
		t.textColor = 0xcaadbd;
		t.x = 30;
		t.y = 26;
		return t;
	};
	_proto._font_tips1_i = function () {
		var t = new eui.Label();
		this._font_tips1 = t;
		t.left = 205;
		t.size = 36;
		t.text = "分享链接邀好友。若新用户从您的链接进入网站 并完成首次下注，则推荐成功。";
		t.textAlign = "left";
		t.textColor = 0xCAADBD;
		t.top = 837;
		t.width = 753;
		return t;
	};
	_proto._font_tips2_i = function () {
		var t = new eui.Label();
		this._font_tips2 = t;
		t.left = 205;
		t.size = 36;
		t.text = "被推荐人每次投注，推荐人都能得到投注金额的  5‰ 的作为佣金。";
		t.textAlign = "left";
		t.textColor = 0xCAADBD;
		t.top = 962;
		t.width = 753;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xcaadbd;
		t.height = 18;
		t.left = 162;
		t.top = 849;
		t.width = 18;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xCAADBD;
		t.height = 18;
		t.left = 162;
		t.top = 972;
		t.width = 18;
		return t;
	};
	_proto._btn_iknow_i = function () {
		var t = new eui.Image();
		this._btn_iknow = t;
		t.left = 413;
		t.source = "plist0_json.img_plist0_img10";
		t.top = 1105;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Image();
		this._btn_close = t;
		t.left = 502;
		t.source = "plist0_json.btn_plist0_close";
		t.top = 1390;
		return t;
	};
	return tjyjSkin;
})(eui.Skin);generateEUI.paths['resource/skin/tips/winSkin.exml'] = window.winSkin = (function (_super) {
	__extends(winSkin, _super);
	function winSkin() {
		_super.call(this);
		this.skinParts = ["_font_win","_font_tips","_btn_close","_btn_buy","_btn_openNext","_gp_zj","_wind"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = winSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._font_win_i(),this._font_tips_i(),this._btn_close_i(),this._gp_zj_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "plist1_json.img_plist1_img19";
		t.x = 212;
		t.y = 92;
		return t;
	};
	_proto._font_win_i = function () {
		var t = new eui.Label();
		this._font_win = t;
		t.bold = true;
		t.horizontalCenter = 9;
		t.size = 90;
		t.text = "50EOS";
		t.textAlign = "center";
		t.textColor = 0xffe21e;
		t.y = 839;
		return t;
	};
	_proto._font_tips_i = function () {
		var t = new eui.Label();
		this._font_tips = t;
		t.bold = true;
		t.size = 42;
		t.text = "可在“已兑奖”查看中奖的刮刮彩";
		t.textAlign = "center";
		t.textColor = 0xedb675;
		t.x = 268;
		t.y = 1093;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Image();
		this._btn_close = t;
		t.source = "plist0_json.btn_plist0_close";
		t.x = 502;
		t.y = 1289;
		return t;
	};
	_proto._gp_zj_i = function () {
		var t = new eui.Group();
		this._gp_zj = t;
		t.x = 228;
		t.y = 1070;
		t.elementsContent = [this._btn_buy_i(),this._btn_openNext_i()];
		return t;
	};
	_proto._btn_buy_i = function () {
		var t = new eui.Image();
		this._btn_buy = t;
		t.source = "plist0_json.btn_plist0_zmyz";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._btn_openNext_i = function () {
		var t = new eui.Image();
		this._btn_openNext = t;
		t.source = "plist0_json.btn_plist0_gxyz";
		t.x = 370;
		t.y = 0;
		return t;
	};
	return winSkin;
})(eui.Skin);generateEUI.paths['resource/skin/winGame/winGameSkin.exml'] = window.winGameSkin = (function (_super) {
	__extends(winGameSkin, _super);
	var winGameSkin$Skin33 = 	(function (_super) {
		__extends(winGameSkin$Skin33, _super);
		function winGameSkin$Skin33() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_zmyz1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = winGameSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_zmyz0";
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
		return winGameSkin$Skin33;
	})(eui.Skin);

	var winGameSkin$Skin34 = 	(function (_super) {
		__extends(winGameSkin$Skin34, _super);
		function winGameSkin$Skin34() {
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
						new eui.SetProperty("_Image1","source","plist0_json.btn_plist0_close1")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = winGameSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "plist0_json.btn_plist0_close0";
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
		return winGameSkin$Skin34;
	})(eui.Skin);

	function winGameSkin() {
		_super.call(this);
		this.skinParts = ["_card","_btn_zmyz","_btn_close","_UIGameCard0Bg","_wind"];
		
		this.height = 1810;
		this.width = 1125;
		this.elementsContent = [this._wind_i()];
	}
	var _proto = winGameSkin.prototype;

	_proto._wind_i = function () {
		var t = new eui.Group();
		this._wind = t;
		t.height = 1810;
		t.width = 1125;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._card_i(),this._btn_zmyz_i(),this._btn_close_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.7;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_bg0_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._card_i = function () {
		var t = new eui.Image();
		this._card = t;
		t.height = 1444;
		t.source = "bg_card0_all_png";
		t.width = 1000;
		t.x = 63;
		t.y = 90;
		return t;
	};
	_proto._btn_zmyz_i = function () {
		var t = new eui.Button();
		this._btn_zmyz = t;
		t.bottom = 57;
		t.label = "";
		t.left = 255;
		t.skinName = winGameSkin$Skin33;
		return t;
	};
	_proto._btn_close_i = function () {
		var t = new eui.Button();
		this._btn_close = t;
		t.bottom = 57;
		t.label = "";
		t.left = 604;
		t.skinName = winGameSkin$Skin34;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.928;
		t.scaleY = 0.93;
		t.x = 99;
		t.y = 530;
		t.elementsContent = [this._UIGameCard0Bg_i()];
		return t;
	};
	_proto._UIGameCard0Bg_i = function () {
		var t = new UIGameCard0Bg();
		this._UIGameCard0Bg = t;
		t.skinName = "gameCard0BgSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return winGameSkin;
})(eui.Skin);