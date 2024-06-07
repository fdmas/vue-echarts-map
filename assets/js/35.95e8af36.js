(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{282:function(e,t,n){e.exports=n.p+"assets/img/VCMaster_1.d1f78351.png"},342:function(e,t,n){"use strict";n.r(t);var a=n(11),i=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("head",[t("link",{attrs:{href:"http://cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css",rel:"stylesheet"}})]),e._v(" "),t("section",{staticClass:"hero"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container is-max-desktop"},[t("div",{staticClass:"columns is-centered"},[t("div",{staticClass:"column has-text-centered"},[t("h1",{staticClass:"title is-1 publication-title"},[e._v("VCMaster: Generating Diverse and Fluent Live Video Comments Based on Multimodal Contexts")]),e._v(" "),t("h2",{staticClass:"title is-4 publication-title"},[e._v("ACM MM 2023")]),e._v(" "),t("div",{staticClass:"is-size-5 publication-authors"},[t("span",{staticClass:"author-block"},[e._v("\n              Manman Zhang, ")]),e._v(" "),t("span",{staticClass:"author-block"},[e._v("\n              Ge Luo, ")]),e._v(" "),t("span",{staticClass:"author-block"},[e._v("\n              Yuchen Ma, \n            ")]),e._v(" "),t("span",{staticClass:"author-block"},[e._v("\n              Sheng Li, \n            ")]),e._v(" "),t("span",{staticClass:"author-block"},[e._v("\n              Zhenxing Qian"),t("sup",[e._v("*")]),e._v(", \n            ")]),e._v(" "),t("span",{staticClass:"author-block"},[e._v("\n              Xinpeng Zhang"),t("sup",[e._v("*")]),e._v(".\n            ")])]),e._v(" "),t("div",{staticClass:"is-size-5 publication-authors"},[t("div",[t("span",{staticClass:"author-block"},[e._v("Fudan University, Shanghai, China")])])]),e._v(" "),t("div",{staticClass:"column has-text-centered"},[t("div",{staticClass:"publication-links"})])])])])])]),e._v(" "),t("section",{staticClass:"hero"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container is-max-desktop"},[t("div",{staticClass:"columns is-centered"},[t("div",{staticClass:"column has-text-centered"},[t("h2",{staticClass:"title publication-title"},[e._v("Abstract")])]),e._v(" "),t("p",[e._v('\n                Live video commenting, or "bullet screen," is a popular social style on video platforms. Automatic live commenting has been explored as a promising approach to enhance the appeal of videos. However, existing methods neglect the diversity of generated sentences, limiting the potential to obtain human-like comments. In this paper, we introduce a novel framework called "VCMaster" for multimodal live video comments generation, which balances the diversity and quality of generated comments to create human-like sentences. We involve images, subtitles, and contextual comments as inputs to better understand complex video contexts. Then, we propose an effective Hierarchical Cross-Fusion Decoder to integrate high-quality trimodal feature representations by cross-fusing critical information from previous layers. Additionally, we develop a Sentence-Level Contrastive Loss to enlarge the distance between generated and contextual comments by contrastive learning. It helps the model to avoid the pitfall of simply imitating provided contextual comments and losing creativity, encouraging the model to achieve more diverse comments while maintaining high quality. We also construct a large-scale multimodal live video comments dataset with 292,507 comments and three sub-datasets that cover nine general categories. Extensive experiments demonstrate that our model achieves a level of human-like language expression and remarkably fluent, diverse, and engaging generated comments compared to baselines.\n                ')]),e._v(" "),t("div",{staticClass:"column has-text-centered"},[t("h2",{staticClass:"title publication-title"},[e._v("Method")]),e._v(" "),t("img",{attrs:{src:n(282)}}),e._v(" "),t("h2",{staticClass:"subtitle has-text-centered"},[t("span",{staticClass:"dnerf"},[e._v("Overview of VCMaster, the proposed Multimodal Live Video Comments Generation model that generates fluent and diverse human-like comments based on video frames, subtitles, and contextual comments. "),t("common-latexDisplay",[e._v("\\mathcal{L}_{TCL}")]),e._v(" and "),t("common-latexDisplay",[e._v("\\mathcal{L}_{SCL}")]),e._v(" aim to enlarge the distance between tokens and sentences, improving the diversity of generated comments at both the token-level and sentence-level. Heatmaps indicate the degree of similarity, with darker colors representing greater distance and lower similarity.")],1)])]),e._v(" "),t("p",[e._v('\n                    The live video comment generation task aims to generate human-like comments by understanding human behaviour. Typically, people post their comments according to current video content or contextual comments from other viewers. In this study, We propose a novel approach named "VCMaster" for multimodal live video comments generation, which involves three modalities to enrich the video information in complex social scenarios and focuses on improving generation quality and diversity, as depicted in Figure 1. \n                ')]),e._v(" "),t("p",[e._v("\n                    We introduce a Hierarchical Cross-Fusion(HCF) Decoder to minimize the information loss during modality input and feature extraction process. Additionally, considering the consistency of the text structure of contextual comments with groundtruth comments, we decode contextual comments together with groundtruth in decoder and compute their attention weights by self-attention module. We also introduce a Sentence-Level Contrastive Loss ("),t("common-latexDisplay",[e._v("\\mathcal{L}_{SCL}")]),e._v(") to enlarge the distance between generated and contextual comments, forcing the model to generate diverse comments instead of relying too much on fed contextual comments. \n                ")],1)])])])]),e._v(" "),t("section",{staticClass:"section",attrs:{id:"BibTeX"}},[t("div",{staticClass:"container is-max-desktop content"},[t("h2",{staticClass:"title publication-title"},[e._v("BibTeX")]),e._v(" "),t("pre",[e._v("        "),t("code",[e._v("\n        @inproceedings{zhang2023vcmaster,\n        title={VCMaster: Generating Diverse and Fluent Live Video Comments Based on Multimodal Contexts},\n        author={Zhang, Manman and Luo, Ge and Ma, Yuchen and Li, Sheng and Qian, Zhenxing and Zhang, Xinpeng},\n        booktitle={Proceedings of the 31th ACM International Conference on Multimedia},\n        year={2023}\n        }\n        ")]),e._v("\n    ")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);