D(
  "irail.be",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(3600),

  CAA("@", "issue", "letsencrypt.org"),

  A("@", "95.85.25.169"),
  AAAA("@", "2a03:b0c0:0:1010::29:d001"),
  CNAME("www", "irail.be.", TTL(43200)),

  A("api", "138.68.121.94"),
  A("belaws", "77.73.98.169"),
  A("list", "176.58.110.110", TTL(60)),
  A("lists", "176.58.110.110", TTL(60)),
  A("analytics", "188.166.72.178"),
  A("server01", "95.85.25.169", TTL(21600)),
  A("server02", "178.62.219.7"),
  A("server03", "46.101.159.114"),
  A("server04", "167.71.59.163"),
  A("staging.api", "95.85.25.169"),
  A("status.graph", "46.101.159.114"),

  AAAA("api", "2a03:b0c0:0:1010::29:d001"),
  AAAA("staging.api", "2a03:b0c0:0:1010::29:d001"),
  AAAA("server01", "2a03:b0c0:0:1010::29:d001"),
  AAAA("server02", "2a03:b0c0:2:d0::3498:2001"),
  AAAA("server03", "2a03:b0c0:3:d0::e2:e001"),

  CNAME("blog", "server02.irail.be."),
  CNAME("data", "server02.irail.be.", TTL(60)),
  CNAME("docs", "irail-docs.netlify.com.", TTL(43200)),
  CNAME("graph", "server03.irail.be.", TTL(600)),
  CNAME("gtfs", "server02.irail.be.", TTL(600)),
  CNAME("hallo", "blog.irail.be.", TTL(43200)),
  CNAME("hello", "blog.irail.be.", TTL(43200)),
  CNAME("mail", "mail.rootspirit.com."),
  CNAME("mail2", "mx.flatturtle.com."),
  CNAME("project", "blog.irail.be.", TTL(43200)),
  CNAME("status", "stats.uptimerobot.com.", TTL(43200)),

  MX("@", 10, "mail.rootspirit.com.", TTL(14400)),
  MX("@", 20, "mail2.rootspirit.nl.", TTL(14400)),
  MX("@", 20, "mail3.rootspirit.com.", TTL(14400)),
  MX("list", 5, "mail.rootspirit.com.", TTL(14400)),
  MX("list", 10, "mail.rootspirit.be.", TTL(14400)),
  MX("lists", 5, "mail.rootspirit.com.", TTL(14400)),
  MX("lists", 10, "mail.rootspirit.be.", TTL(14400)),

  TXT("_github-challenge-irail", "bf07ed29d1", TTL(300)),
  TXT("_github-challenge-irail.hello", "bf10e4a435", TTL(300)),
  TXT("_github-challenge-irail.api", "773e8a542e", TTL(300))
);

D(
  "irail.nl",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(3600),

  A("@", "95.85.25.169"),
  CNAME("www", "irail.nl.", TTL(43200)),

  A("mail", "85.12.6.130"),

  CNAME("*", "irail.be."),
  CNAME("api", "api.irail.be.", TTL(43200)),
  CNAME("belaws", "belaws.irail.be.", TTL(43200)),
  CNAME("blog", "blog.irail.be.", TTL(43200)),
  CNAME("data", "data.irail.be.", TTL(43200)),
  CNAME("gtfs", "gtfs.irail.be.", TTL(43200)),
  CNAME("hallo", "blog.irail.be.", TTL(43200)),
  CNAME("hello", "blog.irail.be.", TTL(43200)),
  CNAME("list", "list.irail.be.", TTL(43200)),
  CNAME("lists", "lists.irail.be.", TTL(43200)),
  CNAME("project", "blog.irail.be.", TTL(43200))
);
