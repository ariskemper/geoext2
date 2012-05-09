Ext.data.JsonP.GeoExt_slider_LayerOpacity({"parentMixins":[],"inheritdoc":null,"extends":"Ext.slider.Single","alternateClassNames":["GeoExt.LayerOpacitySlider"],"requires":[],"tagname":"class","singleton":false,"inheritable":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"mixins":[],"code_type":"ext_define","component":false,"uses":[],"members":{"cfg":[{"owner":"GeoExt.slider.LayerOpacity","tagname":"cfg","meta":{},"name":"aggressive","id":"cfg-aggressive"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"cfg","meta":{},"name":"changeVisibility","id":"cfg-changeVisibility"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"cfg","meta":{},"name":"changeVisibilityDelay","id":"cfg-changeVisibilityDelay"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"cfg","meta":{},"name":"complementaryLayer","id":"cfg-complementaryLayer"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"cfg","meta":{},"name":"delay","id":"cfg-delay"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"cfg","meta":{},"name":"inverse","id":"cfg-inverse"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"cfg","meta":{},"name":"layer","id":"cfg-layer"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"cfg","meta":{},"name":"value","id":"cfg-value"}],"method":[{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{"private":true},"name":"constructor","id":"method-constructor"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{"private":true},"name":"addToMapPanel","id":"method-addToMapPanel"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{"private":true},"name":"bind","id":"method-bind"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{"private":true},"name":"changeComplementaryLayerVisibility","id":"method-changeComplementaryLayerVisibility"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{"private":true},"name":"changeLayerOpacity","id":"method-changeLayerOpacity"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{"private":true},"name":"changeLayerVisibility","id":"method-changeLayerVisibility"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{"private":true},"name":"getLayer","id":"method-getLayer"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{"private":true},"name":"getOpacityValue","id":"method-getOpacityValue"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{"private":true},"name":"initComponent","id":"method-initComponent"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{"private":true},"name":"removeFromMapPanel","id":"method-removeFromMapPanel"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{},"name":"setLayer","id":"method-setLayer"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{"private":true},"name":"unbind","id":"method-unbind"},{"owner":"GeoExt.slider.LayerOpacity","tagname":"method","meta":{"private":true},"name":"update","id":"method-update"}],"property":[],"css_var":[],"event":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.LayerOpacitySlider</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.slider.Single<div class='subclass '><strong>GeoExt.slider.LayerOpacity</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity' target='_blank'>LayerOpacity.js</a></div></pre><div class='doc-contents'><p>Sample code to render a slider outside the map viewport:</p>\n\n<pre class='inline-example '><code>var slider = new <a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.LayerOpacitySlider</a>({\n     renderTo: document.body,\n     width: 200,\n     layer: layer\n });\n</code></pre>\n\n<p> Sample code to add a slider to a map panel:</p>\n\n<pre class='inline-example '><code>var layer = new OpenLayers.Layer.WMS(\n     \"Global Imagery\",\n     \"http://maps.opengeo.org/geowebcache/service/wms\",\n     {layers: \"bluemarble\"}\n );\n var panel = new <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.MapPanel</a>({\n     renderTo: document.body,\n     height: 300,\n     width: 400,\n     map: {\n         controls: [new OpenLayers.Control.Navigation()]\n     },\n     layers: [layer],\n     extent: [-5, 35, 15, 55],\n     items: [{\n         xtype: \"gx_opacityslider\",\n         layer: layer,\n         aggressive: true,\n         vertical: true,\n         height: 100,\n         x: 10,\n         y: 20\n     }]\n });\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-aggressive' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-aggressive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-aggressive' class='name expandable'>aggressive</a><span> : Boolean</span></div><div class='description'><div class='short'>If set to true, the opacity is changed as soon as the thumb is moved. ...</div><div class='long'><p>If set to true, the opacity is changed as soon as the thumb is moved.\nOtherwise when the thumb is released (default).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-changeVisibility' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-changeVisibility' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-changeVisibility' class='name expandable'>changeVisibility</a><span> : Boolean</span></div><div class='description'><div class='short'>If set to true, the layer's visibility is handled by the\nslider, the slider makes the layer invisible when its\nvalue ...</div><div class='long'><p>If set to true, the layer's visibility is handled by the\nslider, the slider makes the layer invisible when its\nvalue is changed to the min value, and makes the layer\nvisible again when its value goes from the min value\nto some other value. The layer passed to the constructor\nmust be visible, as its visibility is fully handled by\nthe slider. Defaults to false.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-changeVisibilityDelay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-changeVisibilityDelay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-changeVisibilityDelay' class='name expandable'>changeVisibilityDelay</a><span> : Number</span></div><div class='description'><div class='short'>Time in milliseconds before changing the layer's visibility. ...</div><div class='long'><p>Time in milliseconds before changing the layer's visibility.\nIf the value changes again within that time, the layer's visibility\nchange does not occur. Only applicable if changeVisibility is true.\nDefaults to 5.</p>\n<p>Defaults to: <code>5</code></p></div></div></div><div id='cfg-complementaryLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-complementaryLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-complementaryLayer' class='name expandable'>complementaryLayer</a><span> : OpenLayers.Layer/GeoExt.data.LayerModel</span></div><div class='description'><div class='short'>If provided, a layer that will be made invisible (its visibility is\nset to false) when the slider value is set to its...</div><div class='long'><p>If provided, a layer that will be made invisible (its visibility is\nset to false) when the slider value is set to its max value. If this\nslider is used to fade visibility between to layers, setting\n<code>complementaryLayer</code> and <code>changeVisibility</code> will make sure that\nonly visible tiles are loaded when the slider is set to its min or max\nvalue. (optional)</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-delay' class='name expandable'>delay</a><span> : Number</span></div><div class='description'><div class='short'>Time in milliseconds before setting the opacity value to the\nlayer. ...</div><div class='long'><p>Time in milliseconds before setting the opacity value to the\nlayer. If the value change again within that time, the original value\nis not set. Only applicable if aggressive is true.</p>\n<p>Defaults to: <code>5</code></p></div></div></div><div id='cfg-inverse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-inverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-inverse' class='name expandable'>inverse</a><span> : Boolean</span></div><div class='description'><div class='short'>If true, we will work with transparency instead of with opacity. ...</div><div class='long'><p>If true, we will work with transparency instead of with opacity.\nDefaults to false.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-layer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-layer' class='name expandable'>layer</a><span> : OpenLayers.Layer/GeoExt.data.LayerModel</span></div><div class='description'><div class='short'>The layer this slider changes the opacity of. ...</div><div class='long'><p>The layer this slider changes the opacity of. (required)</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-value' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-cfg-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-cfg-value' class='name expandable'>value</a><span> : Number</span></div><div class='description'><div class='short'>The value to initialize the slider with. ...</div><div class='long'><p>The value to initialize the slider with. This value is\ntaken into account only if the layer's opacity is null.\nIf the layer's opacity is null and this value is not\ndefined in the config object then the slider initializes\nit to the max value.</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.slider.LayerOpacity-method-constructor' class='name expandable'>GeoExt.slider.LayerOpacity</a>( <span class='pre'>Object config</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Construct the component. ...</div><div class='long'><p>Construct the component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addToMapPanel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-addToMapPanel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-addToMapPanel' class='name expandable'>addToMapPanel</a>( <span class='pre'><a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a> panel</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Called by a MapPanel if this component is one of the items in the panel. ...</div><div class='long'><p>Called by a MapPanel if this component is one of the items in the panel.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>panel</span> : <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-bind' class='name expandable'>bind</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Bind the slider to the layer. ...</div><div class='long'><p>Bind the slider to the layer.</p>\n</div></div></div><div id='method-changeComplementaryLayerVisibility' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-changeComplementaryLayerVisibility' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-changeComplementaryLayerVisibility' class='name expandable'>changeComplementaryLayerVisibility</a>( <span class='pre'><a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.LayerOpacitySlider</a> slider, Number value</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Updates the complementary OpenLayers.Layer visibility. ...</div><div class='long'><p>Updates the complementary <code>OpenLayers.Layer</code> visibility.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>slider</span> : <a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.LayerOpacitySlider</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The slider value</p>\n</div></li></ul></div></div></div><div id='method-changeLayerOpacity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-changeLayerOpacity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-changeLayerOpacity' class='name expandable'>changeLayerOpacity</a>( <span class='pre'><a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.LayerOpacitySlider</a> slider, Number value</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Updates the OpenLayers.Layer opacity value. ...</div><div class='long'><p>Updates the <code>OpenLayers.Layer</code> opacity value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>slider</span> : <a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.LayerOpacitySlider</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The slider value</p>\n</div></li></ul></div></div></div><div id='method-changeLayerVisibility' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-changeLayerVisibility' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-changeLayerVisibility' class='name expandable'>changeLayerVisibility</a>( <span class='pre'><a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.LayerOpacitySlider</a> slider, Number value</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Updates the OpenLayers.Layer visibility. ...</div><div class='long'><p>Updates the <code>OpenLayers.Layer</code> visibility.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>slider</span> : <a href=\"#!/api/GeoExt.slider.LayerOpacity\" rel=\"GeoExt.slider.LayerOpacity\" class=\"docClass\">GeoExt.LayerOpacitySlider</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The slider value</p>\n</div></li></ul></div></div></div><div id='method-getLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-getLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-getLayer' class='name expandable'>getLayer</a>( <span class='pre'>OpenLayers.Layer/GeoExt.data.LayerModel layer</span> ) : OpenLayers.Layer<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Returns the OpenLayers layer object for a layer record or a plain layer\nobject. ...</div><div class='long'><p>Returns the OpenLayers layer object for a layer record or a plain layer\nobject.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : OpenLayers.Layer/GeoExt.data.LayerModel<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>OpenLayers.Layer</span><div class='sub-desc'><p>The OpenLayers layer object</p>\n</div></li></ul></div></div></div><div id='method-getOpacityValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-getOpacityValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-getOpacityValue' class='name expandable'>getOpacityValue</a>( <span class='pre'>OpenLayers.Layer/GeoExt.data.LayerModel layer</span> ) : Integer<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Returns the opacity value for the layer. ...</div><div class='long'><p>Returns the opacity value for the layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : OpenLayers.Layer/GeoExt.data.LayerModel<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Integer</span><div class='sub-desc'><p>The opacity for the layer.</p>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Initialize the component. ...</div><div class='long'><p>Initialize the component.</p>\n</div></div></div><div id='method-removeFromMapPanel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-removeFromMapPanel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-removeFromMapPanel' class='name expandable'>removeFromMapPanel</a>( <span class='pre'><a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a> panel</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Called by a MapPanel if this component is one of the items in the panel. ...</div><div class='long'><p>Called by a MapPanel if this component is one of the items in the panel.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>panel</span> : <a href=\"#!/api/GeoExt.panel.Map\" rel=\"GeoExt.panel.Map\" class=\"docClass\">GeoExt.panel.Map</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-setLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-setLayer' class='name expandable'>setLayer</a>( <span class='pre'>OpenLayers.Layer/GeoExt.data.LayerModel layer</span> )</div><div class='description'><div class='short'>Bind a new layer to the opacity slider. ...</div><div class='long'><p>Bind a new layer to the opacity slider.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : OpenLayers.Layer/GeoExt.data.LayerModel<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-unbind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-unbind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-unbind' class='name expandable'>unbind</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Unbind the slider from the layer. ...</div><div class='long'><p>Unbind the slider from the layer.</p>\n</div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.slider.LayerOpacity'>GeoExt.slider.LayerOpacity</span><br/><a href='source/LayerOpacity.html#GeoExt-slider-LayerOpacity-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.slider.LayerOpacity-method-update' class='name expandable'>update</a>( <span class='pre'>Object evt</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Registered as a listener for opacity change. ...</div><div class='long'><p>Registered as a listener for opacity change.  Updates the value of the slider.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"meta":{},"html_meta":{},"name":"GeoExt.slider.LayerOpacity","files":[{"href":"LayerOpacity.html#GeoExt-slider-LayerOpacity","filename":"LayerOpacity.js"}],"mixedInto":[],"aliases":{"widget":["gx_opacityslider"]},"id":"class-GeoExt.slider.LayerOpacity","superclasses":["Ext.slider.Single"]});