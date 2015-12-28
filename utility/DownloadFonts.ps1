$agents = "Mozilla/5.0 (X11; Linux i686; rv:6.0) Gecko/20100101 Firefox/6.0",`
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",`
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 7.1; Trident/5.0)",`
    "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7",`
    "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)"

foreach($arg in $args) {
    $arg;
    foreach($agent in $agents) {
        $agent;
        $webclient = New-Object System.Net.WebClient
        [void]$webclient.Headers.Add("user-agent", $agent)
        $url = "http://fonts.googleapis.com/css?family=$arg"

        $css = $webclient.DownloadString($url)
        $css
        $fonts = $css |
            Select-String -AllMatches "http://[A-Za-z0-9/._?&=%-]+" |
            Select-Object -ExpandProperty Matches |
            Select-Object -ExpandProperty Value

        foreach($font in $fonts) {
            $font
            $fontfile = [System.Io.Path]::GetFileName((new-object System.Uri $font).LocalPath)
            [void]$webclient.DownloadFile($font, "$pwd\$fontfile")
        }
    }
}