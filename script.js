function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    });
}

function makeToys() {
    return mySetTimeout(3000).then(() => {
        return new Promise((resolve, reject) => {
            if (Math.random() > 0.1) {
                resolve('სათამაშო დამზადდა უდეფექტოდ')
            } else {
                reject('სათამაშო დამზადდა დეფექტით')
            }
        })
    })
}

function sellToys(status) {
    return mySetTimeout(1000).then(() => {
        return new Promise((resolve, reject) => {
            if (status === 'სათამაშო დამზადდა უდეფექტოდ') {
                if (Math.random() > 0.1) {
                    resolve('სათამაშო გაიყიდა')
                } else {
                    reject('სათამაშო ვერ გაიყიდა')
                }
            }
        })
    })
}

function deliverToys(status) {
    return mySetTimeout(2000).then(() => {
        return new Promise((resolve, reject) => {
            if (status === 'სათამაშო გაიყიდა') {
                resolve('სათამაშო გაგზავნილია')
            } else {
                reject('სათამაშო არ გაგზავნილა')
            }
        })
    })
}

makeToys()
    .then((makeStatus) => {
        console.log(makeStatus)
        return sellToys(makeStatus)
    })
    .then((sellStatus) => {
        console.log(sellStatus)
        return deliverToys(sellStatus)
    })
    .then((deliverStatus) => {
        console.log(deliverStatus)
    })
    .catch((error) => {
        console.log(error)
    })


/////////// async,await version

// async function process() {
//     try {
//         const makeStatus = await makeToys()
//         console.log(makeStatus)
//         const sellStatus = await sellToys(makeStatus)
//         console.log(sellStatus)
//         const deliverStatus = await deliverToys(sellStatus)
//         console.log(deliverStatus)
//     } catch (error) {
//         console.log(error)
//     }
// }

// process()


























