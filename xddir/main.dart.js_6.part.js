self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null);$__dart_deferred_initializers__.current=function(hunkHelpers,init,holdersList,$){var A={OverflowBar$(alignment,children,overflowAlignment,overflowDirection,overflowSpacing,spacing){return new A.OverflowBar(spacing,alignment,overflowSpacing,overflowAlignment,overflowDirection,children,null)},OverflowBarAlignment:function OverflowBarAlignment(t0,t1){this.index=t0;this._core$_name=t1},OverflowBar:function OverflowBar(t0,t1,t2,t3,t4,t5,t6){var _=this;_.spacing=t0;_.alignment=t1;_.overflowSpacing=t2;_.overflowAlignment=t3;_.overflowDirection=t4;_.children=t5;_.key=t6},_OverflowBarParentData:function _OverflowBarParentData(t0,t1,t2){this.ContainerParentDataMixin_previousSibling=t0;this.ContainerParentDataMixin_nextSibling=t1;this.offset=t2},_RenderOverflowBar:function _RenderOverflowBar(t0,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10){var _=this;_._spacing=t0;_._overflow_bar$_alignment=t1;_._overflowSpacing=t2;_._overflowAlignment=t3;_._overflowDirection=t4;_._overflow_bar$_textDirection=t5;_._overflow_bar$_clipBehavior=t6;_.ContainerRenderObjectMixin__childCount=t7;_.ContainerRenderObjectMixin__firstChild=t8;_.ContainerRenderObjectMixin__lastChild=t9;_._cachedDryLayoutSizes=_._cachedIntrinsicDimensions=null;_._computingThisDryLayout=false;_._cachedBaselines=_._size=null;_._debugActivePointers=0;_._object$_debugDisposed=false;_.debugCreator=_.parentData=null;_._debugDoingThisLayout=_._debugDoingThisResize=false;_._debugCanParentUseSize=null;_._debugMutationsLocked=false;_._needsLayout=true;_._relayoutBoundary=null;_._doingThisLayoutWithCallback=false;_._constraints=null;_._debugDoingThisPaint=false;_.__RenderObject__wasRepaintBoundary_A=$;_._layerHandle=t10;_._needsCompositingBitsUpdate=false;_.__RenderObject__needsCompositing_A=$;_._needsPaint=true;_._needsCompositedLayerUpdate=false;_._cachedSemanticsConfiguration=null;_._needsSemanticsUpdate=true;_._semantics=null;_._depth=0;_._node$_parent=_._node$_owner=null},_RenderOverflowBar_performLayout_nextChild:function _RenderOverflowBar_performLayout_nextChild(t0,t1){this._box_0=t0;this.$this=t1},__RenderOverflowBar_RenderBox_ContainerRenderObjectMixin:function __RenderOverflowBar_RenderBox_ContainerRenderObjectMixin(){},__RenderOverflowBar_RenderBox_ContainerRenderObjectMixin_RenderBoxContainerDefaultsMixin:function __RenderOverflowBar_RenderBox_ContainerRenderObjectMixin_RenderBoxContainerDefaultsMixin(){},_RestorablePrimitiveValueN:function _RestorablePrimitiveValueN(){},_RestorablePrimitiveValue:function _RestorablePrimitiveValue(){},RestorableBool:function RestorableBool(t0,t1){var _=this;_._defaultValue=t0;_._restoration_properties$_value=null;_._restoration0$_disposed=false;_._restoration0$_owner=_._restoration0$_restorationId=null;_.ChangeNotifier__count=0;_.ChangeNotifier__listeners=t1;_.ChangeNotifier__reentrantlyRemovedListeners=_.ChangeNotifier__notificationCallStackDepth=0;_.ChangeNotifier__debugDisposed=false},SafeArea$(bottom,child,minimum,$top){return new A.SafeArea($top,bottom,minimum,child,null)},SafeArea:function SafeArea(t0,t1,t2,t3,t4){var _=this;_.top=t0;_.bottom=t1;_.minimum=t2;_.child=t3;_.key=t4}},C,B,E,D,G,F;A=hunkHelpers.updateHolder(holdersList[8],A);C=holdersList[2];B=holdersList[0];E=holdersList[12];D=holdersList[11];G=holdersList[10];F=holdersList[14];A.OverflowBarAlignment.prototype={toString$0(_){return"OverflowBarAlignment."+this._core$_name}};A.OverflowBar.prototype={createRenderObject$1(context){var _this=this,_null=null,t1=context.dependOnInheritedWidgetOfExactType$1$0(type$.Directionality);t1.toString;t1=t1.textDirection;t1=new A._RenderOverflowBar(_this.spacing,_this.alignment,_this.overflowSpacing,_this.overflowAlignment,_this.overflowDirection,t1,C.Clip_0,0,_null,_null,B.LayerHandle$());t1.RenderObject$0();t1.addAll$1(0,_null);return t1},updateRenderObject$2(context,renderObject){var t1,_this=this;type$._RenderOverflowBar._as(renderObject);renderObject.set$spacing(0,_this.spacing);renderObject.set$alignment(_this.alignment);renderObject.set$overflowSpacing(_this.overflowSpacing);renderObject.set$overflowAlignment(_this.overflowAlignment);renderObject.set$overflowDirection(_this.overflowDirection);t1=context.dependOnInheritedWidgetOfExactType$1$0(type$.Directionality);t1.toString;renderObject.set$textDirection(t1.textDirection);renderObject.set$clipBehavior(C.Clip_0)}};A._OverflowBarParentData.prototype={};A._RenderOverflowBar.prototype={set$spacing(_,value){if(this._spacing===value)return;this._spacing=value;this.markNeedsLayout$0()},set$alignment(value){if(this._overflow_bar$_alignment==value)return;this._overflow_bar$_alignment=value;this.markNeedsLayout$0()},set$overflowSpacing(value){if(this._overflowSpacing===value)return;this._overflowSpacing=value;this.markNeedsLayout$0()},set$overflowAlignment(value){if(this._overflowAlignment===value)return;this._overflowAlignment=value;this.markNeedsLayout$0()},set$overflowDirection(value){if(this._overflowDirection===value)return;this._overflowDirection=value;this.markNeedsLayout$0()},set$textDirection(value){if(this._overflow_bar$_textDirection===value)return;this._overflow_bar$_textDirection=value;this.markNeedsLayout$0()},set$clipBehavior(value){var _this=this;if(value===_this._overflow_bar$_clipBehavior)return;_this._overflow_bar$_clipBehavior=value;_this.markNeedsPaint$0();_this.markNeedsSemanticsUpdate$0()},setupParentData$1(child){if(!(child.parentData instanceof A._OverflowBarParentData))child.parentData=new A._OverflowBarParentData(null,null,C.Offset_0_0)},computeMinIntrinsicHeight$1(width){var t1,barWidth,t2,t3,height,_this=this,child=_this.ContainerRenderObjectMixin__firstChild;if(child==null)return 0;for(t1=B._instanceType(_this)._eval$1("ContainerRenderObjectMixin.1"),barWidth=0;child!=null;){barWidth+=child._computeIntrinsicDimension$3(C._IntrinsicDimension_0,1/0,child.get$computeMinIntrinsicWidth());t2=child.parentData;t2.toString;child=t1._as(t2).ContainerParentDataMixin_nextSibling}t2=_this._spacing;t3=_this.ContainerRenderObjectMixin__childCount;child=_this.ContainerRenderObjectMixin__firstChild;if(barWidth+t2*(t3-1)>width){for(height=0;child!=null;){height+=child._computeIntrinsicDimension$3(C._IntrinsicDimension_2,width,child.get$computeMinIntrinsicHeight());t2=child.parentData;t2.toString;child=t1._as(t2).ContainerParentDataMixin_nextSibling}return height+_this._overflowSpacing*(_this.ContainerRenderObjectMixin__childCount-1)}else{for(height=0;child!=null;){height=Math.max(height,child._computeIntrinsicDimension$3(C._IntrinsicDimension_2,width,child.get$computeMinIntrinsicHeight()));t2=child.parentData;t2.toString;child=t1._as(t2).ContainerParentDataMixin_nextSibling}return height}},computeMaxIntrinsicHeight$1(width){var t1,barWidth,t2,t3,height,_this=this,child=_this.ContainerRenderObjectMixin__firstChild;if(child==null)return 0;for(t1=B._instanceType(_this)._eval$1("ContainerRenderObjectMixin.1"),barWidth=0;child!=null;){barWidth+=child._computeIntrinsicDimension$3(C._IntrinsicDimension_0,1/0,child.get$computeMinIntrinsicWidth());t2=child.parentData;t2.toString;child=t1._as(t2).ContainerParentDataMixin_nextSibling}t2=_this._spacing;t3=_this.ContainerRenderObjectMixin__childCount;child=_this.ContainerRenderObjectMixin__firstChild;if(barWidth+t2*(t3-1)>width){for(height=0;child!=null;){height+=child._computeIntrinsicDimension$3(C._IntrinsicDimension_3,width,child.get$computeMaxIntrinsicHeight());t2=child.parentData;t2.toString;child=t1._as(t2).ContainerParentDataMixin_nextSibling}return height+_this._overflowSpacing*(_this.ContainerRenderObjectMixin__childCount-1)}else{for(height=0;child!=null;){height=Math.max(height,child._computeIntrinsicDimension$3(C._IntrinsicDimension_3,width,child.get$computeMaxIntrinsicHeight()));t2=child.parentData;t2.toString;child=t1._as(t2).ContainerParentDataMixin_nextSibling}return height}},computeMinIntrinsicWidth$1(height){var t1,width,t2,_this=this,child=_this.ContainerRenderObjectMixin__firstChild;if(child==null)return 0;for(t1=B._instanceType(_this)._eval$1("ContainerRenderObjectMixin.1"),width=0;child!=null;){width+=child._computeIntrinsicDimension$3(C._IntrinsicDimension_0,1/0,child.get$computeMinIntrinsicWidth());t2=child.parentData;t2.toString;child=t1._as(t2).ContainerParentDataMixin_nextSibling}return width+_this._spacing*(_this.ContainerRenderObjectMixin__childCount-1)},computeMaxIntrinsicWidth$1(height){var t1,width,t2,_this=this,child=_this.ContainerRenderObjectMixin__firstChild;if(child==null)return 0;for(t1=B._instanceType(_this)._eval$1("ContainerRenderObjectMixin.1"),width=0;child!=null;){width+=child._computeIntrinsicDimension$3(C._IntrinsicDimension_1,1/0,child.get$computeMaxIntrinsicWidth());t2=child.parentData;t2.toString;child=t1._as(t2).ContainerParentDataMixin_nextSibling}return width+_this._spacing*(_this.ContainerRenderObjectMixin__childCount-1)},computeDistanceToActualBaseline$1(baseline){return this.defaultComputeDistanceToHighestActualBaseline$1(baseline)},computeDryLayout$1(constraints){var overallWidth,childConstraints,t1,childrenWidth,maxChildHeight,y,childSize,t2,actualWidth,_this=this,child=_this.ContainerRenderObjectMixin__firstChild;if(child==null)return new B.Size(B.clampDouble(0,constraints.minWidth,constraints.maxWidth),B.clampDouble(0,constraints.minHeight,constraints.maxHeight));overallWidth=constraints.maxWidth;childConstraints=new B.BoxConstraints(0,overallWidth,0,constraints.maxHeight);for(t1=B._instanceType(_this)._eval$1("ContainerRenderObjectMixin.1"),childrenWidth=0,maxChildHeight=0,y=0;child!=null;){childSize=child.getDryLayout$1(childConstraints);childrenWidth+=childSize._dx;t2=childSize._dy;maxChildHeight=Math.max(maxChildHeight,t2);y+=t2+_this._overflowSpacing;t2=child.parentData;t2.toString;child=t1._as(t2).ContainerParentDataMixin_nextSibling}actualWidth=childrenWidth+_this._spacing*(_this.ContainerRenderObjectMixin__childCount-1);if(actualWidth>overallWidth)return constraints.constrain$1(new B.Size(overallWidth,y-_this._overflowSpacing));else return constraints.constrain$1(new B.Size(_this._overflow_bar$_alignment==null?actualWidth:overallWidth,maxChildHeight))},performLayout$0(){var t1,t2,childConstraints,t3,childrenWidth,maxChildHeight,maxChildWidth,t4,t5,rtl,actualWidth,nextChild,y,x,firstChildWidth,overallWidth,layoutSpacing,halfRemainingWidth,t6,t7,_this=this,_box_0={},child=_box_0.child=_this.ContainerRenderObjectMixin__firstChild;if(child==null){t1=type$.BoxConstraints._as(B.RenderObject.prototype.get$constraints.call(_this));_this._size=new B.Size(B.clampDouble(0,t1.minWidth,t1.maxWidth),B.clampDouble(0,t1.minHeight,t1.maxHeight));return}t1=type$.BoxConstraints;t2=t1._as(B.RenderObject.prototype.get$constraints.call(_this));childConstraints=new B.BoxConstraints(0,t2.maxWidth,0,t2.maxHeight);for(t2=B._instanceType(_this)._eval$1("ContainerRenderObjectMixin.1"),t3=child,childrenWidth=0,maxChildHeight=0,maxChildWidth=0;t3!=null;t3=child){t3.layout$2$parentUsesSize(childConstraints,true);t3=_box_0.child;t4=t3._size;t5=t4._dx;childrenWidth+=t5;maxChildHeight=Math.max(maxChildHeight,t4._dy);maxChildWidth=Math.max(maxChildWidth,t5);t3=t3.parentData;t3.toString;child=t2._as(t3).ContainerParentDataMixin_nextSibling;_box_0.child=child}rtl=_this._overflow_bar$_textDirection===C.TextDirection_0;actualWidth=childrenWidth+_this._spacing*(_this.ContainerRenderObjectMixin__childCount-1);if(actualWidth>t1._as(B.RenderObject.prototype.get$constraints.call(_this)).maxWidth){child=_this._overflowDirection===E.VerticalDirection_1?_this.ContainerRenderObjectMixin__firstChild:_this.ContainerRenderObjectMixin__lastChild;_box_0.child=child;nextChild=new A._RenderOverflowBar_performLayout_nextChild(_box_0,_this);for(t2=type$._OverflowBarParentData,t3=child,y=0;t3!=null;t3=child){t4=t3.parentData;t4.toString;t2._as(t4);switch(_this._overflowAlignment.index){case 0:if(rtl){t3=t1._as(B.RenderObject.prototype.get$constraints.call(_this));t5=_box_0.child;x=t3.maxWidth-t5._size._dx;t3=t5}else x=0;break;case 2:t3=t1._as(B.RenderObject.prototype.get$constraints.call(_this));t5=_box_0.child;x=(t3.maxWidth-t5._size._dx)/2;t3=t5;break;case 1:if(rtl)x=0;else{t3=t1._as(B.RenderObject.prototype.get$constraints.call(_this));t5=_box_0.child;x=t3.maxWidth-t5._size._dx;t3=t5}break;default:x=0}t4.offset=new B.Offset(x,y);y+=t3._size._dy+_this._overflowSpacing;child=nextChild.call$0();_box_0.child=child}_this._size=t1._as(B.RenderObject.prototype.get$constraints.call(_this)).constrain$1(new B.Size(t1._as(B.RenderObject.prototype.get$constraints.call(_this)).maxWidth,y-_this._overflowSpacing))}else{child=_this.ContainerRenderObjectMixin__firstChild;_box_0.child=child;firstChildWidth=child._size._dx;overallWidth=_this._overflow_bar$_alignment==null?actualWidth:t1._as(B.RenderObject.prototype.get$constraints.call(_this)).maxWidth;_this._size=t1._as(B.RenderObject.prototype.get$constraints.call(_this)).constrain$1(new B.Size(overallWidth,maxChildHeight));x=B._Cell$named("x");layoutSpacing=_this._spacing;switch(_this._overflow_bar$_alignment){case null:x.__late_helper$_value=rtl?_this._size._dx-firstChildWidth:0;break;case E.MainAxisAlignment_0:x.__late_helper$_value=rtl?_this._size._dx-firstChildWidth:0;break;case E.MainAxisAlignment_2:t1=_this._size._dx;halfRemainingWidth=(t1-actualWidth)/2;x.__late_helper$_value=rtl?t1-halfRemainingWidth-firstChildWidth:halfRemainingWidth;break;case E.MainAxisAlignment_1:x.__late_helper$_value=rtl?actualWidth-firstChildWidth:_this._size._dx-actualWidth;break;case E.MainAxisAlignment_3:t1=_this._size._dx;layoutSpacing=(t1-childrenWidth)/(_this.ContainerRenderObjectMixin__childCount-1);x.__late_helper$_value=rtl?t1-firstChildWidth:0;break;case E.MainAxisAlignment_4:t1=_this.ContainerRenderObjectMixin__childCount;layoutSpacing=t1>0?(_this._size._dx-childrenWidth)/t1:0;t1=layoutSpacing/2;x.__late_helper$_value=rtl?_this._size._dx-t1-firstChildWidth:t1;break;case E.MainAxisAlignment_5:t1=_this._size._dx;layoutSpacing=(t1-childrenWidth)/(_this.ContainerRenderObjectMixin__childCount+1);x.__late_helper$_value=rtl?t1-layoutSpacing-firstChildWidth:layoutSpacing;break}for(t1=!rtl,t3=type$._OverflowBarParentData,t4=x.__late_helper$_name;t5=_box_0.child,t5!=null;){t6=t5.parentData;t6.toString;t3._as(t6);t7=x.__late_helper$_value;if(t7===x)B.throwExpression(B.LateError$localNI(t4));t5=t5._size;t6.offset=new B.Offset(t7,(maxChildHeight-t5._dy)/2);if(t1)t5=x.__late_helper$_value=t7+(t5._dx+layoutSpacing);else t5=t7;child=_box_0.child=t2._as(t6).ContainerParentDataMixin_nextSibling;if(rtl&&child!=null)x.__late_helper$_value=t5-(child._size._dx+layoutSpacing)}}},hitTestChildren$2$position(result,position){return this.defaultHitTestChildren$2$position(result,position)},paint$2(context,offset){this.defaultPaint$2(context,offset)}};A.__RenderOverflowBar_RenderBox_ContainerRenderObjectMixin.prototype={attach$1(owner){var child,t1,t2;this.super$RenderObject$attach(owner);child=this.ContainerRenderObjectMixin__firstChild;for(t1=type$._OverflowBarParentData;child!=null;){child.attach$1(owner);t2=child.parentData;t2.toString;child=t1._as(t2).ContainerParentDataMixin_nextSibling}},detach$0(_){var child,t1,t2;this.super$AbstractNode$detach(0);child=this.ContainerRenderObjectMixin__firstChild;for(t1=type$._OverflowBarParentData;child!=null;){child.detach$0(0);t2=child.parentData;t2.toString;child=t1._as(t2).ContainerParentDataMixin_nextSibling}}};A.__RenderOverflowBar_RenderBox_ContainerRenderObjectMixin_RenderBoxContainerDefaultsMixin.prototype={};A._RestorablePrimitiveValueN.prototype={createDefaultValue$0(){return this._defaultValue},didUpdateValue$1(oldValue){this.notifyListeners$0()},fromPrimitives$1(serialized){return B._instanceType(this)._eval$1("_RestorablePrimitiveValueN.T")._as(serialized)},toPrimitives$0(){var t1=this._restoration_properties$_value;return t1==null?B._instanceType(this)._eval$1("RestorableValue.T")._as(t1):t1}};A._RestorablePrimitiveValue.prototype={fromPrimitives$1(serialized){return this.super$_RestorablePrimitiveValueN$fromPrimitives(serialized)},toPrimitives$0(){var t1=this.super$_RestorablePrimitiveValueN$toPrimitives();t1.toString;return t1}};A.RestorableBool.prototype={};A.SafeArea.prototype={build$1(context){var t5,t6,t7,_this=this,padding=context.dependOnInheritedWidgetOfExactType$1$0(type$.MediaQuery).data.padding,t1=_this.minimum,t2=Math.max(padding.left,t1.left),t3=_this.top,t4=t3?padding.top:0;t4=Math.max(t4,t1.top);t5=Math.max(padding.right,t1.right);t6=_this.bottom;t7=t6?padding.bottom:0;return new D.Padding(new B.EdgeInsets(t2,t4,t5,Math.max(t7,t1.bottom)),G.MediaQuery_MediaQuery$removePadding(_this.child,context,t6,true,true,t3),null)}};var typesOffset=hunkHelpers.updateTypes(["double(double)"]);A._RenderOverflowBar_performLayout_nextChild.prototype={call$0(){var t1=this.$this,t2=t1._overflowDirection,t3=this._box_0.child;t1=B._instanceType(t1)._eval$1("ContainerRenderObjectMixin.1");if(t2===E.VerticalDirection_1){t2=t3.parentData;t2.toString;t2=t1._as(t2).ContainerParentDataMixin_nextSibling;t1=t2}else{t2=t3.parentData;t2.toString;t2=t1._as(t2).ContainerParentDataMixin_previousSibling;t1=t2}return t1},$signature:260};(function aliases(){var _=A._RestorablePrimitiveValueN.prototype;_.super$_RestorablePrimitiveValueN$fromPrimitives=_.fromPrimitives$1;_.super$_RestorablePrimitiveValueN$toPrimitives=_.toPrimitives$0})();(function installTearOffs(){var _instance_1_u=hunkHelpers._instance_1u;var _;_instance_1_u(_=A._RenderOverflowBar.prototype,"get$computeMinIntrinsicHeight","computeMinIntrinsicHeight$1",0);_instance_1_u(_,"get$computeMaxIntrinsicHeight","computeMaxIntrinsicHeight$1",0);_instance_1_u(_,"get$computeMinIntrinsicWidth","computeMinIntrinsicWidth$1",0);_instance_1_u(_,"get$computeMaxIntrinsicWidth","computeMaxIntrinsicWidth$1",0)})();(function inheritance(){var _mixinHard=hunkHelpers.mixinHard,_mixin=hunkHelpers.mixin,_inherit=hunkHelpers.inherit;_inherit(A.OverflowBarAlignment,B._Enum);_inherit(A.OverflowBar,D.MultiChildRenderObjectWidget);_inherit(A._OverflowBarParentData,D.ContainerBoxParentData);_inherit(A.__RenderOverflowBar_RenderBox_ContainerRenderObjectMixin,B.RenderBox);_inherit(A.__RenderOverflowBar_RenderBox_ContainerRenderObjectMixin_RenderBoxContainerDefaultsMixin,A.__RenderOverflowBar_RenderBox_ContainerRenderObjectMixin);_inherit(A._RenderOverflowBar,A.__RenderOverflowBar_RenderBox_ContainerRenderObjectMixin_RenderBoxContainerDefaultsMixin);_inherit(A._RenderOverflowBar_performLayout_nextChild,B.Closure0Args);_inherit(A._RestorablePrimitiveValueN,D.RestorableValue);_inherit(A._RestorablePrimitiveValue,A._RestorablePrimitiveValueN);_inherit(A.RestorableBool,A._RestorablePrimitiveValue);_inherit(A.SafeArea,D.StatelessWidget);_mixinHard(A.__RenderOverflowBar_RenderBox_ContainerRenderObjectMixin,D.ContainerRenderObjectMixin);_mixin(A.__RenderOverflowBar_RenderBox_ContainerRenderObjectMixin_RenderBoxContainerDefaultsMixin,D.RenderBoxContainerDefaultsMixin)})();B._Universe_addRules(init.typeUniverse,JSON.parse('{"_OverflowBarParentData":{"BoxParentData":[],"ContainerParentDataMixin":["RenderBox"],"ParentData":[]},"OverflowBarAlignment":{"Enum":[]},"OverflowBar":{"MultiChildRenderObjectWidget":[],"RenderObjectWidget":[],"Widget":[],"DiagnosticableTree":[]},"_RenderOverflowBar":{"RenderBoxContainerDefaultsMixin":["RenderBox","_OverflowBarParentData"],"RenderBox":[],"ContainerRenderObjectMixin":["RenderBox","_OverflowBarParentData"],"RenderObject":[],"DiagnosticableTree":[],"AbstractNode":[],"HitTestTarget":[],"ContainerRenderObjectMixin.1":"_OverflowBarParentData","RenderBoxContainerDefaultsMixin.1":"_OverflowBarParentData","ContainerRenderObjectMixin.0":"RenderBox"},"_RestorablePrimitiveValueN":{"RestorableProperty":["1"],"Listenable":[]},"_RestorablePrimitiveValue":{"_RestorablePrimitiveValueN":["1"],"RestorableProperty":["1"],"Listenable":[]},"RestorableBool":{"_RestorablePrimitiveValueN":["bool"],"RestorableProperty":["bool"],"Listenable":[],"_RestorablePrimitiveValueN.T":"bool","RestorableValue.T":"bool"},"SafeArea":{"StatelessWidget":[],"Widget":[],"DiagnosticableTree":[]}}'));B._Universe_addErasedTypes(init.typeUniverse,JSON.parse('{"_RestorablePrimitiveValue":1}'));var type$={BoxConstraints:B.findType("BoxConstraints"),Directionality:B.findType("Directionality"),MediaQuery:B.findType("MediaQuery"),_OverflowBarParentData:B.findType("_OverflowBarParentData"),_RenderOverflowBar:B.findType("_RenderOverflowBar")};(function constants(){F.IconData_58674_false=new D.IconData(58674,false);F.Icon_IconData_58674_false_null=new D.Icon(F.IconData_58674_false,null);F.OverflowBarAlignment_0=new A.OverflowBarAlignment(0,"start");F.OverflowBarAlignment_1=new A.OverflowBarAlignment(1,"end")})()};$__dart_deferred_initializers__["VPUigBEsX2vcogaVuP2LvoWxaO0="]=$__dart_deferred_initializers__.current;