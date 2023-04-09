D(
  "civiclabs.be",

  REG_NONE,
  DnsProvider(DSP_TRANSIP),

  DefaultTTL(86400),

  // GitHub Pages - https://help.github.com/articles/setting-up-an-apex-domain/
  A("@", "185.199.108.153"),
  A("@", "185.199.109.153"),
  A("@", "185.199.110.153"),
  A("@", "185.199.111.153"),
  CNAME("www", "civiclabs.be."),

  // Fastmail - https://www.fastmail.help/hc/en-us/articles/1500000280261
  MX("@", 10, "in1-smtp.messagingengine.com."),
  MX("@", 20, "in2-smtp.messagingengine.com."),

  CNAME("ftp", "civiclabs.be."),
  CNAME("mail", "civiclabs.be.")
);

D(
  "prototypefund.be",

  REG_NONE,
  DnsProvider(DSP_TRANSIP),

  DefaultTTL(86400),

  // GitHub Pages - https://help.github.com/articles/setting-up-an-apex-domain/
  A("@", "185.199.108.153"),
  A("@", "185.199.109.153"),
  A("@", "185.199.110.153"),
  A("@", "185.199.111.153"),
  CNAME("www", "prototypefund.be."),

  // Fastmail - https://www.fastmail.help/hc/en-us/articles/1500000280261
  MX("@", 10, "in1-smtp.messagingengine.com."),
  MX("@", 20, "in2-smtp.messagingengine.com."),
  TXT("@", "v=spf1 include:spf.messagingengine.com ?all"),
  CNAME("fm1._domainkey", "fm1.prototypefund.be.dkim.fmhosted.com."),
  CNAME("fm2._domainkey", "fm2.prototypefund.be.dkim.fmhosted.com."),
  CNAME("fm3._domainkey", "fm3.prototypefund.be.dkim.fmhosted.com.")
);
