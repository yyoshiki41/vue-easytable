import httpRequest from "@/plugins/http-request";

// get versions
export function getVersions() {
    return new Promise((resolve, reject) => {
        let net = window.location;

        // 包含 /vue-easytable/ 目录
        httpRequest({
            url: `${net.protocol}//${net.hostname}:${
                net.port
            }/vue-easytable/versions.json?t=${new Date().getTime()}`,
            method: "get",
        })
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
