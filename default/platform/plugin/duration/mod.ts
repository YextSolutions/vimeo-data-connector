export function secToMin(duration: string) {
    var min = Math.floor(Number(duration) / 60)
    var sec = Number(duration) % 60
    if (sec < 10)
    {
        var time = String(min) + ":0" + String(sec)
    }
    else
    {
    var time = String(min) + ":" + String(sec)
    }
    return time
}