D(
  "bikedataproject.com",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(86400),

  A("@", "82.196.14.169"),
  A("www", "82.196.14.169"),
  AAAA("@", "2a03:b0c0:0:1010::6c:3001"),
  AAAA("www", "2a03:b0c0:0:1010::6c:3001"),

  CNAME("mail", "bikedataproject.com."),
  CNAME("ftp", "bikedataproject.com."),

  MX("@", 10, "bikedataproject.com.")
);

D(
  "bikedataproject.org",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(86400),

  A("@", "82.196.14.169"),
  A("www", "82.196.14.169"),
  AAAA("@", "2a03:b0c0:0:1010::6c:3001"),
  AAAA("www", "2a03:b0c0:0:1010::6c:3001"),

  A("api", "82.196.1.248"),
  A("data", "82.196.14.169"),
  A("staging", "82.196.14.169"),
  AAAA("api", "2a03:b0c0:0:1010::6c:c001"),
  AAAA("data", "2a03:b0c0:0:1010::6c:3001"),
  AAAA("staging", "2a03:b0c0:0:1010::6c:3001"),

  CNAME("ftp", "bikedataproject.org."),
  CNAME("mail", "bikedataproject.org."),
  CNAME("wiki", "hosting.gitbook.com."),

  MX("@", 10, "bikedataproject.org."),
  TXT("@", "v=spf1 include:spf.mailjet.com ?all"),

  TXT("mailjet._domainkey", "k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDl+45W2gRdf4IsbV4SwL1B3SnMOJa5ZUZY5CX7mXzait7G8zJxvKY/Tle0UZhcyALSQ8lOR+MY1d3DWXBoiCwyEB5+3ZJXD5KmgrxNZ2llnsvHWxgWjEIlozyHuxKwdmgNYZA64A27XJpNDTGiA4GRl20S9mih1MP2XBuvh04cXQIDAQAB"),
  TXT("mailjet._e4641609", "e4641609bcdab1b1c4c4933b2b7d121a")
);
