export const privateKeys = {
    dbHost: 'https://parseapi.back4app.com/classes/logs',
    IpDataKey: "20426234f75dd6aeafcc498fa3839229dfc9ed6953f42aedb4fcfb41",
    ApplicationId: 'x8JRtH4VjV8TWN8F0il6iyqucwMFvgYVO4BUJ3tH',
    RESTKey: '8sr5yglRAVz1yWM7g4wcQLUCEIUIU01L8CzeqtyF',
};

export const headers = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': privateKeys.ApplicationId,
    'X-Parse-REST-API-Key': privateKeys.RESTKey,
}

export const footerContent =
    `<section class="copyright">
<img src="/images/euro-fund.jpg">
<img src="/images/erasmus-euro.png">
</section>

<footer class="footer bg-gradient">
<label class="text-center footer-text font-border">
    <p>Made by <a class="footer-text" href="https://github.com/Boyan-Apostolov">Boyan Apostolov</a></p>
</label>
</footer>`;