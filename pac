// Generated by gfwlist2pac
// https://github.com/clowwindy/gfwlist2pac

var proxy = "PROXY 10.38.110.200:1080;";

var domains = {
  "le.com": 1, 
  "tudou.com": 1, 
  "kuwo.cn": 1, 
  "wikipedia.org": 1, 
  "sohu.com": 1, 
  "lecloud.com": 1,  
  "bilibili.com": 1, 
  "app.bilibili.com": 1,
  "api.bilibili.com": 1,
  "passport.snm0516.aisee.tv": 1,
  "api.vc.bilibili.com": 1,
  "bangumi.bilibili.com": 1,
  "biliapi.net": 1,
  "snm0516.aisee.tv": 1,
  "hcdnv.bili.gslb.c.cdnhwc2.com": 1,
  "upos-sz-mirrorkodo.bilivideo.com.w.cdngslb.com": 1,
  "i0.hdslb.com.w.kunlunno.com": 1,
  "bilivideo.com": 1,
  "baidu.com": 1,
  "iqiyi.com": 1, 
  "tianyancha.com": 1, 
  "163.com": 1, 
  "letv.cn": 1, 
  "youku.com": 1, 
  "letv.com": 1, 
  "126.net": 1, 
  "douban.fm": 1, 
  "qq.com": 1, 
  "kugou.com": 1,
  "speedtest.cn": 1
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while(1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(domains, host)) {
                return proxy;
            } else {
                return direct;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}
