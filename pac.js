function FindProxyForURL(url, host) {
    const proxy_no = "DIRECT";
    const proxy_yes = "SOCKS5 127.0.0.1:7890";

    if (dnsDomainIs(host, "google.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "github.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "gstatic.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "githubassets.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "googleusercontent.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "openvpn.net")) { return proxy_yes; }
    if (dnsDomainIs(host, "githubusercontent.com")) { return proxy_yes; }
    if (dnsDomainIs(host, "vscode.dev")) { return proxy_yes; }

    return proxy_no;
}
