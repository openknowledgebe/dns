D(
  "openbelgium.be",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(3600),

  A("@", "188.166.35.76"),
  CNAME("www", "openbelgium.be.", TTL(43200)),

  A("2016", "37.139.14.192"),
  A("2017", "37.139.14.192"),
  A("2018", "37.139.14.192"),
  A("2019", "37.139.14.192"),
  A("2020", "37.139.14.192"),
  CNAME("2021", "openbelgium-2021.netlify.app.", TTL(43200)),
  CNAME("2022", "openbelgium-2022.netlify.app.", TTL(43200)),

  CNAME("status", "page.updown.io.", TTL(43200)),
  TXT("_updown.status", "updown-page=p/jp7vz"),

  TXT("_github-challenge-openknowledgebe-org", "f7cacad4c7"),
  TXT("_github-pages-challenge-openknowledgebe", "b1a5a40f6b1a9f04a984634b23547a")
);
