D(
  "openknowledge.be",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(3600),

  A("@", "104.198.14.52"),
  CNAME("www", "openknowledge.be.", TTL(14400)),

  CNAME("cloud", "nextcloud-okbe.cloud68.systems.", TTL(43200)),
  CNAME("meet", "bigbluebutton-okbe.cloud68.systems.", TTL(43200)),

  CNAME("status", "page.updown.io.", TTL(43200)),
  TXT("_updown.status", "updown-page=m7gr"),

  A("redirect", "188.166.35.76"),

  A("2019.elections", "188.166.35.76"),
  A("api.elections", "188.166.35.76"),
  A("data.elections", "188.166.35.76"),
  CNAME("docs.elections", "hosting.gitbook.com.", TTL(43200)),
  CNAME("elections", "confident-jang-8e0614.netlify.com.", TTL(43200)),

  A("tourism", "37.139.14.192"),
  A("datawijs", "37.139.14.192"),
  A("diplohack", "37.139.14.192"),

  CNAME("docs", "hosting.gitbook.com.", TTL(43200)),
  CNAME("internal", "hosting.gitbook.com.", TTL(43200)),
  CNAME("w4p", "openknowledgebe.github.io.", TTL(43200)),

  // Fastmail - https://www.fastmail.help/hc/en-us/articles/1500000280261
  MX("@", 10, "in1-smtp.messagingengine.com."),
  MX("@", 20, "in2-smtp.messagingengine.com."),
  TXT("@", "v=spf1 include:spf.messagingengine.com ?all"),

  TXT("@", "ca3-5760a333489e43b0b1228d2247098580"),
  TXT("@", "google-site-verification=uewZAzrReUIbRjm-A9kIJlQmhQpnRhQOkKMfswpguLo"),
  TXT("_github-challenge-openknowledgebe-org", "69c1e4f01f"),
  TXT("_github-pages-challenge-openknowledgebe", "3506b1182d594f39ac99943ffade61")
);
