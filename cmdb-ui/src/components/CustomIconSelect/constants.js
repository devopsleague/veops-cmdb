import i18n from '@/lang'

export const iconTypeList = () => [
  // { value: '0', label: '常用' },
  { value: '1', label: i18n.t('customIconSelect.outlined') },
  { value: '2', label: i18n.t('customIconSelect.filled') },
  { value: '3', label: i18n.t('customIconSelect.multicolor') }
]

export const commonIconList = ['changyong-ubuntu',
  'changyong-centos',
  'changyong-changyonglogo45',
  'changyong-pingguo',
  'changyong-windows',
  'changyong-Oracle',
  'changyong-freebsd',
  'changyong-mysql',
  'changyong-fedora',
  'changyong-linux',
  'changyong-sqlite',
  'changyong-memcached',
  'changyong-pingtaiyunweiguanli',
  'changyong-debian',
  'changyong-googlecloud',
  'changyong-mongodb',
  'changyong-redhat',
  'changyong-redis',
  'changyong-amazon',
  'changyong-alibabacloud',
  'changyong-SQLServer',
  'changyong-Sybase',
  'changyong-PostgreSQL',
  'changyong-SUSE',
  'changyong-huawei',
  'changyong-weiruan',
  'changyong-ziyuan40',
  'changyong-tengxunyun',
  'changyong-php',
  'changyong-visual-studio',
  'changyong-java',
  'changyong-ruby',
  'changyong-powershell',
  'changyong-C',
  'changyong-cyuyan',
  'changyong-Python']

export const linearIconList = [
  {
    value: 'database',
    label: '数据库',
    list: [{
      value: 'icon-xianxing-DB2',
      label: 'DB2'
    }, {
      value: 'icon-xianxing-oracle',
      label: 'Oracle'
    }, {
      value: 'icon-xianxing-informix',
      label: 'Informix'
    }, {
      value: 'icon-xianxing-Sybase',
      label: 'Sybase'
    }, {
      value: 'icon-xianxing-SQLServer',
      label: 'SQLServer'
    }, {
      value: 'icon-xianxing-PostgreSQL',
      label: 'PostgreSQL'
    }, {
      value: 'icon-xianxing-mySQL',
      label: 'mySQL'
    }, {
      value: 'icon-xianxing-access',
      label: 'access'
    }, {
      value: 'icon-xianxing-mongodb',
      label: 'mongodb'
    }, {
      value: 'icon-xianxing-redis',
      label: 'redis'
    }]
  }, {
    value: 'system',
    label: '操作系统',
    list: [{
      value: 'icon-xianxing-Windows',
      label: 'Windows'
    }, {
      value: 'icon-xianxing-Linux',
      label: 'Linux'
    }, {
      value: 'icon-xianxing-unix',
      label: 'Unix'
    }, {
      value: 'icon-xianxing-Mac',
      label: 'Mac'
    }, {
      value: 'icon-xianxing-Ubuntu',
      label: 'Ubuntu'
    }, {
      value: 'icon-xianxing-centos',
      label: 'Centos'
    }, {
      value: 'icon-xianxing-redhat',
      label: 'Redhat'
    }]
  }, {
    value: 'language',
    label: '语言',
    list: [{
      value: 'icon-xianxing-python',
      label: 'python'
    }, {
      value: 'icon-xianxing-Java',
      label: 'Java'
    }, {
      value: 'icon-xianxing-c1',
      label: 'C++'
    }, {
      value: 'icon-xianxing-c2',
      label: 'C#'
    }, {
      value: 'icon-xianxing-swift',
      label: 'Swift'
    }, {
      value: 'icon-xianxing-php',
      label: 'PHP'
    }, {
      value: 'icon-xianxing-shell',
      label: 'Shell'
    }, {
      value: 'icon-xianxing-powershell',
      label: 'PowerShell'
    }, {
      value: 'icon-xianxing-bat',
      label: 'Bat'
    }]
  }, {
    value: 'status',
    label: '状态',
    list: [{
      value: 'icon-xianxing-yiwen',
      label: '疑问'
    }, {
      value: 'icon-xianxing-zanting',
      label: '暂停'
    }, {
      value: 'icon-xianxing-tianjia',
      label: '添加'
    }, {
      value: 'icon-xianxing-jianqu',
      label: '减去'
    }, {
      value: 'icon-xianxing-quxiao',
      label: '取消'
    }, {
      value: 'icon-xianxing-queren',
      label: '确认'
    }, {
      value: 'icon-xianxing-jinggao',
      label: '警告'
    }, {
      value: 'icon-xianxing-jinzhi',
      label: '禁止'
    }, {
      value: 'icon-xianxing-shuoming',
      label: '说明'
    }, {
      value: 'icon-xianxing-chulizhong',
      label: '处理中'
    }, {
      value: 'icon-xianxing-zaixian',
      label: '在线'
    }, {
      value: 'icon-xianxing-xiaxian',
      label: '下线'
    }]
  }, {
    value: 'icon-xianxing-application',
    label: '应用',
    list: [{
      value: 'icon-xianxing-yilianjie',
      label: '已连接'
    }, {
      value: 'icon-xianxing-weilianjie',
      label: '未连接'
    }, {
      value: 'icon-xianxing-shoucang',
      label: '收藏'
    }, {
      value: 'icon-xianxing-baojing',
      label: '报警'
    }, {
      value: 'icon-xianxing-erweima',
      label: '二维码'
    }, {
      value: 'icon-xianxing-fenzhi',
      label: '分支'
    }, {
      value: 'icon-xianxing-yunshuju',
      label: '云数据'
    }, {
      value: 'icon-xianxing-yunshangchuan',
      label: '云上传'
    }, {
      value: 'icon-xianxing-yunxiazai',
      label: '云下载'
    }, {
      value: 'icon-xianxing-xiaoxi',
      label: '消息'
    }, {
      value: 'icon-xianxing-dingwei',
      label: '定位'
    }, {
      value: 'icon-xianxing-guankan',
      label: '观看'
    }, {
      value: 'icon-xianxing-jinzhiguankan',
      label: '禁止观看'
    }, {
      value: 'icon-xianxing-yirenzheng',
      label: '已认证'
    }, {
      value: 'icon-xianxing-weirenzheng',
      label: '未认证'
    }, {
      value: 'icon-xianxing-biaoqian',
      label: '标签'
    }, {
      value: 'icon-xianxing-yonghu',
      label: '用户'
    }, {
      value: 'icon-xianxing-tianjiayonghu',
      label: '添加用户'
    }, {
      value: 'icon-xianxing-shanchuyonghu',
      label: '删除用户'
    }, {
      value: 'icon-xianxing-qiehuanyonghu',
      label: '切换用户'
    }, {
      value: 'icon-xianxing-weixiu',
      label: '维修'
    }, {
      value: 'icon-xianxing-wuliji',
      label: '物理机'
    }, {
      value: 'icon-xianxing-xuniji',
      label: '虚拟机'
    }, {
      value: 'icon-xianxing-docker',
      label: 'docker'
    }, {
      value: 'icon-xianxing-luyouqi',
      label: '路由器'
    }, {
      value: 'icon-xianxing-jiaohuanji',
      label: '交换机'
    }, {
      value: 'icon-xianxing-fanghuoqiang',
      label: '防火墙'
    }, {
      value: 'icon-xianxing-fuzaijunheng',
      label: '负载均衡'
    }, {
      value: 'icon-xianxing-wangka',
      label: '网卡'
    }, {
      value: 'icon-xianxing-neicun',
      label: '内存'
    }, {
      value: 'icon-xianxing-yingpan',
      label: '硬盘'
    }, {
      value: 'icon-xianxing-bumen',
      label: '部门'
    }, {
      value: 'icon-xianxing-chanpin',
      label: '产品'
    }, {
      value: 'icon-xianxing-dayinji',
      label: '打印机'
    }, {
      value: 'icon-xianxing-chajian',
      label: '插件'
    }, {
      value: 'icon-xianxing-yingyong',
      label: '应用'
    }, {
      value: 'icon-xianxing-nginx',
      label: 'Nginx'
    }, {
      value: 'icon-xianxing-apache',
      label: 'Apache'
    }, {
      value: 'icon-xianxing-tomcat',
      label: 'Tomcat'
    }, {
      value: 'icon-xianxing-aliyun',
      label: '阿里云'
    }, {
      value: 'icon-xianxing-tengxunyun',
      label: '腾讯云'
    }, {
      value: 'icon-xianxing-huaweiyun',
      label: '华为云'
    }, {
      value: 'icon-xianxing-aws',
      label: 'AWS'
    }]
  }, {
    value: 'data',
    label: '数据',
    list: [{
      value: 'icon-xianxing-bingzhuangtu',
      label: '饼状图'
    }, {
      value: 'icon-xianxing-huanxingtu',
      label: '环形图'
    }, {
      value: 'icon-xianxing-zhuzhuangtu',
      label: '柱状图'
    }, {
      value: 'icon-xianxing-tiaoxingtu',
      label: '条形图'
    }, {
      value: 'icon-xianxing-mianjitu',
      label: '面积图'
    }, {
      value: 'icon-xianxing-pubutu',
      label: '瀑布图'
    }, {
      value: 'icon-xianxing-xiangxingtu',
      label: '箱型图'
    }, {
      value: 'icon-xianxing-zhexiantu',
      label: '折线图'
    }, {
      value: 'icon-xianxing-dianzhuangtu',
      label: '点状图'
    }, {
      value: 'icon-xianxing-redutu',
      label: '热度图'
    }, {
      value: 'icon-xianxing-shangsheng',
      label: '上升'
    }, {
      value: 'icon-xianxing-xiajiang',
      label: '下降'
    }, {
      value: 'icon-xianxing-gupiaotu',
      label: '股票图'
    }, {
      value: 'icon-xianxing-jijintu',
      label: '基金图'
    }, {
      value: 'icon-xianxing-huakuaitu',
      label: '滑块图'
    }, {
      value: 'icon-xianxing-leidatu',
      label: '雷达图'
    }, {
      value: 'icon-xianxing-shishu',
      label: '整数'
    }, {
      value: 'icon-xianxing-fudianshu',
      label: '浮点数'
    }, {
      value: 'icon-xianxing-wenben',
      label: '文本'
    }, {
      value: 'icon-xianxing-datetime',
      label: 'datetime'
    }, {
      value: 'icon-xianxing-date',
      label: 'date'
    }, {
      value: 'icon-xianxing-time',
      label: 'time'
    }, {
      value: 'icon-xianxing-json',
      label: 'json'
    }]
  }
]

export const fillIconList = [
  {
    value: 'database',
    label: '数据库',
    list: [{
      value: 'icon-shidi-DB2',
      label: 'DB2'
    }, {
      value: 'icon-shidi-oracle',
      label: 'Oracle'
    }, {
      value: 'icon-shidi-informix',
      label: 'Informix'
    }, {
      value: 'icon-shidi-Sybase',
      label: 'Sybase'
    }, {
      value: 'icon-shidi-SQLServer',
      label: 'SQLServer'
    }, {
      value: 'icon-shidi-PostgreSQL',
      label: 'PostgreSQL'
    }, {
      value: 'icon-shidi-mySQL',
      label: 'mySQL'
    }, {
      value: 'icon-shidi-access',
      label: 'access'
    }, {
      value: 'icon-shidi-mongodb',
      label: 'mongodb'
    }, {
      value: 'icon-shidi-redis',
      label: 'redis'
    }]
  }, {
    value: 'system',
    label: '操作系统',
    list: [{
      value: 'icon-shidi-Windows',
      label: 'Windows'
    }, {
      value: 'icon-shidi-Linux',
      label: 'Linux'
    }, {
      value: 'icon-shidi-unix',
      label: 'Unix'
    }, {
      value: 'icon-shidi-Mac',
      label: 'Mac'
    }, {
      value: 'icon-shidi-Ubuntu',
      label: 'Ubuntu'
    }, {
      value: 'icon-shidi-centos',
      label: 'Centos'
    }, {
      value: 'icon-shidi-redhat',
      label: 'Redhat'
    }]
  }, {
    value: 'language',
    label: '语言',
    list: [{
      value: 'icon-shidi-python',
      label: 'python'
    }, {
      value: 'icon-shidi-Java',
      label: 'Java'
    }, {
      value: 'icon-shidi-c1',
      label: 'C++'
    }, {
      value: 'icon-shidi-c2',
      label: 'C#'
    }, {
      value: 'icon-shidi-swift',
      label: 'Swift'
    }, {
      value: 'icon-shidi-php',
      label: 'PHP'
    }, {
      value: 'icon-shidi-shell',
      label: 'Shell'
    }, {
      value: 'icon-shidi-powershell',
      label: 'PowerShell'
    }, {
      value: 'icon-shidi-bat',
      label: 'Bat'
    }]
  }, {
    value: 'status',
    label: '状态',
    list: [{
      value: 'icon-shidi-yiwen',
      label: '疑问'
    }, {
      value: 'icon-shidi-zanting',
      label: '暂停'
    }, {
      value: 'icon-shidi-tianjia',
      label: '添加'
    }, {
      value: 'icon-shidi-jianqu',
      label: '减去'
    }, {
      value: 'icon-shidi-quxiao',
      label: '取消'
    }, {
      value: 'icon-shidi-queren',
      label: '确认'
    }, {
      value: 'icon-shidi-jinggao',
      label: '警告'
    }, {
      value: 'icon-shidi-jinzhi',
      label: '禁止'
    }, {
      value: 'icon-shidi-shuoming',
      label: '说明'
    }, {
      value: 'icon-shidi-chulizhong',
      label: '处理中'
    }, {
      value: 'icon-shidi-zaixian',
      label: '在线'
    }, {
      value: 'icon-shidi-xiaxian',
      label: '下线'
    }]
  }, {
    value: 'icon-shidi-application',
    label: '应用',
    list: [{
      value: 'icon-shidi-yilianjie',
      label: '已连接'
    }, {
      value: 'icon-shidi-weilianjie',
      label: '未连接'
    }, {
      value: 'icon-shidi-shoucang',
      label: '收藏'
    }, {
      value: 'icon-shidi-baojing',
      label: '报警'
    }, {
      value: 'icon-shidi-erweima',
      label: '二维码'
    }, {
      value: 'icon-shidi-fenzhi',
      label: '分支'
    }, {
      value: 'icon-shidi-yunshuju',
      label: '云数据'
    }, {
      value: 'icon-shidi-yunshangchuan',
      label: '云上传'
    }, {
      value: 'icon-shidi-yunxiazai',
      label: '云下载'
    }, {
      value: 'icon-shidi-xiaoxi',
      label: '消息'
    }, {
      value: 'icon-shidi-dingwei',
      label: '定位'
    }, {
      value: 'icon-shidi-guankan',
      label: '观看'
    }, {
      value: 'icon-shidi-jinzhiguankan',
      label: '禁止观看'
    }, {
      value: 'icon-shidi-yirenzheng',
      label: '已认证'
    }, {
      value: 'icon-shidi-weirenzheng',
      label: '未认证'
    }, {
      value: 'icon-shidi-biaoqian',
      label: '标签'
    }, {
      value: 'icon-shidi-yonghu',
      label: '用户'
    }, {
      value: 'icon-shidi-tianjiayonghu',
      label: '添加用户'
    }, {
      value: 'icon-shidi-shanchuyonghu',
      label: '删除用户'
    }, {
      value: 'icon-shidi-qiehuanyonghu',
      label: '切换用户'
    }, {
      value: 'icon-shidi-weixiu',
      label: '维修'
    }, {
      value: 'icon-shidi-wuliji',
      label: '物理机'
    }, {
      value: 'icon-shidi-xuniji',
      label: '虚拟机'
    }, {
      value: 'icon-shidi-docker',
      label: 'docker'
    }, {
      value: 'icon-shidi-luyouqi',
      label: '路由器'
    }, {
      value: 'icon-shidi-jiaohuanji',
      label: '交换机'
    }, {
      value: 'icon-shidi-fanghuoqiang',
      label: '防火墙'
    }, {
      value: 'icon-shidi-fuzaijunheng',
      label: '负载均衡'
    }, {
      value: 'icon-shidi-wangka',
      label: '网卡'
    }, {
      value: 'icon-shidi-neicun',
      label: '内存'
    }, {
      value: 'icon-shidi-yingpan',
      label: '硬盘'
    }, {
      value: 'icon-shidi-bumen',
      label: '部门'
    }, {
      value: 'icon-shidi-chanpin',
      label: '产品'
    }, {
      value: 'icon-shidi-dayinji',
      label: '打印机'
    }, {
      value: 'icon-shidi-chajian',
      label: '插件'
    }, {
      value: 'icon-shidi-yingyong',
      label: '应用'
    }, {
      value: 'icon-shidi-nginx',
      label: 'Nginx'
    }, {
      value: 'icon-shidi-apache',
      label: 'Apache'
    }, {
      value: 'icon-shidi-tomcat',
      label: 'Tomcat'
    }, {
      value: 'icon-shidi-aliyun',
      label: '阿里云'
    }, {
      value: 'icon-shidi-tengxunyun',
      label: '腾讯云'
    }, {
      value: 'icon-shidi-huaweiyun',
      label: '华为云'
    }, {
      value: 'icon-shidi-aws',
      label: 'AWS'
    }]
  }, {
    value: 'data',
    label: '数据',
    list: [{
      value: 'icon-shidi-bingzhuangtu',
      label: '饼状图'
    }, {
      value: 'icon-shidi-huanxingtu',
      label: '环形图'
    }, {
      value: 'icon-shidi-zhuzhuangtu',
      label: '柱状图'
    }, {
      value: 'icon-shidi-tiaoxingtu',
      label: '条形图'
    }, {
      value: 'icon-shidi-mianjitu',
      label: '面积图'
    }, {
      value: 'icon-shidi-pubutu',
      label: '瀑布图'
    }, {
      value: 'icon-shidi-xiangxingtu',
      label: '箱型图'
    }, {
      value: 'icon-shidi-zhexiantu',
      label: '折线图'
    }, {
      value: 'icon-shidi-dianzhuangtu',
      label: '点状图'
    }, {
      value: 'icon-shidi-redutu',
      label: '热度图'
    }, {
      value: 'icon-shidi-shangsheng',
      label: '上升'
    }, {
      value: 'icon-shidi-xiajiang',
      label: '下降'
    }, {
      value: 'icon-shidi-gupiaotu',
      label: '股票图'
    }, {
      value: 'icon-shidi-jijintu',
      label: '基金图'
    }, {
      value: 'icon-shidi-huakuaitu',
      label: '滑块图'
    }, {
      value: 'icon-shidi-leidatu',
      label: '雷达图'
    }, {
      value: 'icon-shidi-shishu',
      label: '整数'
    }, {
      value: 'icon-shidi-fudianshu',
      label: '浮点数'
    }, {
      value: 'icon-shidi-wenben',
      label: '文本'
    }, {
      value: 'icon-shidi-datetime',
      label: 'datetime'
    }, {
      value: 'icon-shidi-date',
      label: 'date'
    }, {
      value: 'icon-shidi-time',
      label: 'time'
    }, {
      value: 'icon-shidi-json',
      label: 'json'
    }]
  }
]

export const multicolorIconList = [
  {
    value: 'database',
    label: '数据库',
    list: [{
      value: 'caise-DB2',
      label: 'DB2'
    }, {
      value: 'caise-oracle',
      label: 'Oracle'
    }, {
      value: 'caise-informix',
      label: 'Informix'
    }, {
      value: 'caise-Sybase',
      label: 'Sybase'
    }, {
      value: 'caise-SQLServer',
      label: 'SQLServer'
    }, {
      value: 'caise-PostgreSQL',
      label: 'PostgreSQL'
    }, {
      value: 'caise-mySQL',
      label: 'mySQL'
    }, {
      value: 'caise-access',
      label: 'access'
    }, {
      value: 'caise-mongodb',
      label: 'mongodb'
    }, {
      value: 'caise-redis',
      label: 'redis'
    }]
  }, {
    value: 'cloud',
    label: '云',
    list: [{
      value: 'AWS',
      label: 'AWS'
    }, {
      value: 'Azure',
      label: 'Azure'
    }, {
      value: 'Google_Cloud_Platform',
      label: 'Google Cloud Platform'
    }, {
      value: 'Alibaba_Cloud',
      label: '阿里云'
    }, {
      value: 'Huawei_Cloud',
      label: '华为云'
    }, {
      value: 'Tencent_Cloud',
      label: '腾讯云'
    }, {
      value: 'UCloud',
      label: 'UCloud'
    }, {
      value: 'Ctyun',
      label: '天翼云'
    }, {
      value: 'ECloud',
      label: '移动云'
    }, {
      value: 'JDCloud',
      label: '京东云'
    }, {
      value: 'Bytecloud',
      label: '字节云'
    }, {
      value: 'OpenStack',
      label: 'OpenStack'
    }, {
      value: 'ZStack',
      label: 'ZStack'
    }, {
      value: 'Nutanix',
      label: 'Nutanix'
    }]
  }, {
    value: 'system',
    label: '操作系统',
    list: [{
      value: 'caise-Windows',
      label: 'Windows'
    }, {
      value: 'caise-Linux',
      label: 'Linux'
    }, {
      value: 'caise-unix',
      label: 'Unix'
    }, {
      value: 'caise-Mac',
      label: 'Mac'
    }, {
      value: 'caise-Ubuntu',
      label: 'Ubuntu'
    }, {
      value: 'caise-centos',
      label: 'Centos'
    }, {
      value: 'caise-redhat',
      label: 'Redhat'
    }]
  }, {
    value: 'language',
    label: '语言',
    list: [{
      value: 'caise-python',
      label: 'python'
    }, {
      value: 'caise-Java',
      label: 'Java'
    }, {
      value: 'caise-c1',
      label: 'C++'
    }, {
      value: 'caise-c2',
      label: 'C#'
    }, {
      value: 'caise-swift',
      label: 'Swift'
    }, {
      value: 'caise-php',
      label: 'PHP'
    }, {
      value: 'caise-shell',
      label: 'Shell'
    }, {
      value: 'caise-powershell',
      label: 'PowerShell'
    }, {
      value: 'caise-bat',
      label: 'Bat'
    }]
  }, {
    value: 'status',
    label: '状态',
    list: [{
      value: 'caise-yiwen',
      label: '疑问'
    }, {
      value: 'caise-zanting',
      label: '暂停'
    }, {
      value: 'caise-tianjia',
      label: '添加'
    }, {
      value: 'caise-jianqu',
      label: '减去'
    }, {
      value: 'caise-quxiao',
      label: '取消'
    }, {
      value: 'caise-queren',
      label: '确认'
    }, {
      value: 'caise-jinggao',
      label: '警告'
    }, {
      value: 'caise-jinzhi',
      label: '禁止'
    }, {
      value: 'caise-shuoming',
      label: '说明'
    }, {
      value: 'caise-chulizhong',
      label: '处理中'
    }, {
      value: 'caise-zaixian',
      label: '在线'
    }, {
      value: 'caise-xiaxian',
      label: '下线'
    }]
  }, {
    value: 'caise-application',
    label: '应用',
    list: [{
      value: 'caise-yilianjie',
      label: '已连接'
    }, {
      value: 'caise-weilianjie',
      label: '未连接'
    }, {
      value: 'caise-shoucang',
      label: '收藏'
    }, {
      value: 'caise-baojing',
      label: '报警'
    }, {
      value: 'caise-erweima',
      label: '二维码'
    }, {
      value: 'caise-fenzhi',
      label: '分支'
    }, {
      value: 'caise-yunshuju',
      label: '云数据'
    }, {
      value: 'caise-yunshangchuan',
      label: '云上传'
    }, {
      value: 'caise-yunxiazai',
      label: '云下载'
    }, {
      value: 'caise-xiaoxi',
      label: '消息'
    }, {
      value: 'caise-dingwei',
      label: '定位'
    }, {
      value: 'caise-guankan',
      label: '观看'
    }, {
      value: 'caise-jinzhiguankan',
      label: '禁止观看'
    }, {
      value: 'caise-yirenzheng',
      label: '已认证'
    }, {
      value: 'caise-weirenzheng',
      label: '未认证'
    }, {
      value: 'caise-biaoqian',
      label: '标签'
    }, {
      value: 'caise-yonghu',
      label: '用户'
    }, {
      value: 'caise-tianjiayonghu',
      label: '添加用户'
    }, {
      value: 'caise-shanchuyonghu',
      label: '删除用户'
    }, {
      value: 'caise-qiehuanyonghu',
      label: '切换用户'
    }, {
      value: 'caise-weixiu',
      label: '维修'
    }, {
      value: 'caise-wuliji',
      label: '物理机'
    }, {
      value: 'caise-xuniji',
      label: '虚拟机'
    }, {
      value: 'caise-docker',
      label: 'docker'
    }, {
      value: 'caise-luyouqi',
      label: '路由器'
    }, {
      value: 'caise-jiaohuanji',
      label: '交换机'
    }, {
      value: 'caise-fanghuoqiang',
      label: '防火墙'
    }, {
      value: 'caise-fuzaijunheng',
      label: '负载均衡'
    }, {
      value: 'caise-wangka',
      label: '网卡'
    }, {
      value: 'caise-neicun',
      label: '内存'
    }, {
      value: 'caise-yingpan',
      label: '硬盘'
    }, {
      value: 'caise-bumen',
      label: '部门'
    }, {
      value: 'caise-chanpin',
      label: '产品'
    }, {
      value: 'caise-yingyong',
      label: '应用'
    }, {
      value: 'caise-dayinji',
      label: '打印机'
    }, {
      value: 'caise-chajian',
      label: '插件'
    }, {
      value: 'caise-nginx',
      label: 'Nginx'
    }, {
      value: 'caise-apache',
      label: 'Apache'
    }, {
      value: 'caise-tomcat',
      label: 'Tomcat'
    }, {
      value: 'caise-VPC',
      label: 'VPC'
    }, {
      value: 'caise-CDN',
      label: 'CDN'
    }, {
      value: 'caise-OOS',
      label: '对象存储'
    }]
  }, {
    value: 'data',
    label: '数据',
    list: [{
      value: 'caise-bingzhuangtu',
      label: '饼状图'
    }, {
      value: 'caise-huanxingtu',
      label: '环形图'
    }, {
      value: 'caise-zhuzhuangtu',
      label: '柱状图'
    }, {
      value: 'caise-tiaoxingtu',
      label: '条形图'
    }, {
      value: 'caise-mianjitu',
      label: '面积图'
    }, {
      value: 'caise-pubutu',
      label: '瀑布图'
    }, {
      value: 'caise-xiangxingtu',
      label: '箱型图'
    }, {
      value: 'caise-zhexiantu',
      label: '折线图'
    }, {
      value: 'caise-dianzhuangtu',
      label: '点状图'
    }, {
      value: 'caise-redutu',
      label: '热度图'
    }, {
      value: 'caise-shangsheng',
      label: '上升'
    }, {
      value: 'caise-xiajiang',
      label: '下降'
    }, {
      value: 'caise-gupiaotu',
      label: '股票图'
    }, {
      value: 'caise-jijintu',
      label: '基金图'
    }, {
      value: 'caise-huakuaitu',
      label: '滑块图'
    }, {
      value: 'caise-leidatu',
      label: '雷达图'
    }, {
      value: 'caise-shishu',
      label: '整数'
    }, {
      value: 'caise-fudianshu',
      label: '浮点数'
    }, {
      value: 'caise-wenben',
      label: '文本'
    }, {
      value: 'caise-datetime',
      label: 'datetime'
    }, {
      value: 'caise-date',
      label: 'date'
    }, {
      value: 'caise-time',
      label: 'time'
    }, {
      value: 'caise-json',
      label: 'json'
    }]
  }
]
