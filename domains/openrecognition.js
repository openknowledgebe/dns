D(
  "bebadges.be",

  REG_NONE,
  DnsProvider(DSP_TRANSIP),

  DefaultTTL(3600),

  A("@", "192.0.2.1"),
  CNAME("www", "bebadges.be."),

  TXT("_dmarc", "v=DMARC1; p=none;")
);

D(
  "edubadges.be",

  REG_NONE,
  DnsProvider(DSP_TRANSIP),

  DefaultTTL(3600),

  A("@", "151.101.1.195"),
  A("@", "151.101.65.195"),
  CNAME("www", "edubadges.be.", TTL(43200)),

  CNAME("acc", "cust-arteveldehs-edubadges-host.belnet.be.", TTL(43200)),
  CNAME("acc.api", "cust-arteveldehs-edubadges-host.belnet.be.", TTL(43200)),
  CNAME("acc.validator", "cust-arteveldehs-edubadges-host.belnet.be.", TTL(43200)),
  CNAME("api", "cust-arteveldehs-edubadges-host.belnet.be.", TTL(43200)),
  CNAME("join", "upbeat-franklin-a32dbd.netlify.app.", TTL(3600)),
  CNAME("validator", "cust-arteveldehs-edubadges-host.belnet.be.", TTL(43200))
);

D(
  "escobadges.eu",

  REG_NONE,
  DnsProvider(DSP_TRANSIP),

  DefaultTTL(3600),

  A("@", "188.226.169.29"),
  CNAME("www", "escobadges.eu.", TTL(43200)),

  A("app", "151.101.1.195"),
  A("app", "151.101.65.195"),

  CNAME("builder", "escobadges.eu.", TTL(43200)),

  TXT("@", "firebase=escobadges"),
  TXT("@", "google-site-verification=dSD8D4-2CYxWHhGdz4ICAYlrw5zA9sR7aVsGOgxZAk8"),
  TXT("smtpapi._domainkey", "k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPtW5iwpXVPiH5FzJ7Nrl8USzuY9zqqzjE0D1r04xDN6qwziDnmgcFNNfMewVKN2D1O+2J9N14hRprzByFwfQW76yojh54Xu3uSbQ3JP0A7k8o8GutRF8zbFUA8n0ZH2y0cIEjMliXY4W4LwPA7m4q0ObmvSjhd63O9d8z1XkUBwIDAQAB"),

  TXT("@", "v=spf1 include:_spf.firebasemail.com ~all")
);

D(
  "openrecognition.be",

  REG_NONE,
  DnsProvider(DSP_TRANSIP),

  DefaultTTL(3600),

  A("@", "184.168.131.241"),
  CNAME("www", "openrecognition.be.", TTL(43200)),

  // Fastmail - https://www.fastmail.help/hc/en-us/articles/1500000280261
  MX("@", 10, "in1-smtp.messagingengine.com."),
  MX("@", 20, "in2-smtp.messagingengine.com.")
);
