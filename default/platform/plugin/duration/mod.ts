export function secToMin(duration: string) {
    var min = Math.floor(Number(duration) / 60)
    var sec = Number(duration) % 60
    var time = String(min) + ":" + String(sec)
    return time
}