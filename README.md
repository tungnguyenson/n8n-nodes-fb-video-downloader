# n8n-nodes-fb-video-downloader

This is an n8n community node. It lets you use fb-video-downloader in your n8n workflows.

fb-video-downloader is a tool extracting URL and some other metdata from a Facebook video or reel, using [@xaviabot/fb-downloader](https://www.npmjs.com/package/@xaviabot/fb-downloader) npm package

Example of response data:

```
[
  {
    "url": "https://www.facebook.com/reel/1728958571008614",
    "sd": "https://video.fsgn19-1.fna.fbcdn.net/o1/v/t2/f2/m69/AQMGqkvXwV5NoGaglIZmeKmkt427nKQhCe9YSX2SwrknhCqJ_6mqnzg63njHgPEc0FyGT3QFwqbsuJYd9hnWf1aC.mp4?strext=1&_nc_cat=109&_nc_oc=Adnlv9b29M3iqEgAty_CcP98J0AsFNiapYhMUWwhTS_WuVfwhgNZ3u3Ssf72IUMasQ0&_nc_sid=8bf8fe&_nc_ht=video.fsgn19-1.fna.fbcdn.net&_nc_ohc=okgTynekoMEQ7kNvgFSbDYC&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMzYwLnByb2dyZXNzaXZlX2gyNjQtYmFzaWMtZ2VuMl8zNjBwIiwieHB2X2Fzc2V0X2lkIjo0OTMyNDU4NDM0MDAzNTksInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoyOSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_zt=28&oh=00_AYGlygjidtZQavnY0luKfdF7Ls8iY0HUpTBOmVH4ems3wg&oe=67E9E8DD",
    "hd": "https://video.fsgn19-1.fna.fbcdn.net/o1/v/t2/f2/m69/AQPpHn9nj5SwqNtcpK9KwYoL-ayJx4C5EHOIcxBXkipqOyHTInMj94Zb4FHgJT122hcP-Kbk0vVCyz4glHD6yd1F.mp4?strext=1&_nc_cat=103&_nc_oc=AdlILwoaDwDQbRaZoOGLUf4RnOzPZ3Fj91lm00ajX-JoZ4vAA5oORGn70j_cGXy74Zw&_nc_sid=8bf8fe&_nc_ht=video.fsgn19-1.fna.fbcdn.net&_nc_ohc=IuS9CBjPFLcQ7kNvgEBeEdi&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuNzIwLnByb2dyZXNzaXZlX2gyNjQtYmFzaWMtZ2VuMl83MjBwIiwieHB2X2Fzc2V0X2lkIjo0OTMyNDU4NDM0MDAzNTksInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoyOSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_zt=28&oh=00_AYFL70YYqPcL_VoTxxbJt1Yjd3ZWwpg_napAvkt9wI-fVg&oe=67EA0A8F",
    "title": "Facebook",
    "thumbnail": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t51.29350-10/474216945_1149165843451557_5205877588208067786_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=cb5bf7&_nc_ohc=oZSLFPh_ceYQ7kNvgFQtzVw&_nc_oc=AdnYP3Jqy5FBC85zc1KN7TpxY4eMxYppyammkyzxhJ3uHHc8gWqvMjI-qhX1SJUof5o&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=eZCYUY0OjjM1CfEs6xRixQ&oh=00_AYEptwLDJsb00x2b-1MNeTGWVyIaV6uHLW50_S1HYWSkzQ&oe=67EA179C",
    "media": "https://video.fsgn19-1.fna.fbcdn.net/o1/v/t2/f2/m69/AQPpHn9nj5SwqNtcpK9KwYoL-ayJx4C5EHOIcxBXkipqOyHTInMj94Zb4FHgJT122hcP-Kbk0vVCyz4glHD6yd1F.mp4?strext=1&_nc_cat=103&_nc_oc=AdlILwoaDwDQbRaZoOGLUf4RnOzPZ3Fj91lm00ajX-JoZ4vAA5oORGn70j_cGXy74Zw&_nc_sid=8bf8fe&_nc_ht=video.fsgn19-1.fna.fbcdn.net&_nc_ohc=IuS9CBjPFLcQ7kNvgEBeEdi&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuNzIwLnByb2dyZXNzaXZlX2gyNjQtYmFzaWMtZ2VuMl83MjBwIiwieHB2X2Fzc2V0X2lkIjo0OTMyNDU4NDM0MDAzNTksInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoyOSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_zt=28&oh=00_AYFL70YYqPcL_VoTxxbJt1Yjd3ZWwpg_napAvkt9wI-fVg&oe=67EA0A8F"
  }
]
```

`media` is HD url by default, or set to SD if HD is not available.


## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.