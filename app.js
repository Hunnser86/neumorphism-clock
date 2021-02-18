const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');


    function getTime() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegree = (((seconds / 60) * 360) + 90);
        sc.style.transform = `rotate(${secondsDegree}deg)`


        const minutes = now.getMinutes();
        const minutesDegree = (((minutes / 60) * 360) + 90);
        mn.style.transform = `rotate(${minutesDegree}deg)`


        const hours = now.getHours();
        const hoursDegree = (((hours / 60) * 360) + 90);
        hr.style.transform = `rotate(${hoursDegree}deg)`



    }

    setInterval(getTime, 1000);