$(document).ready(() => {
    $('#accept').click(() => {
        
        let date = $('#date').val()
        let dateNew = date.split('-')
        
        let year = dateNew[0]
        let getMonth = dateNew[1]
        let days = dateNew[2]        
        
        let month = setMonth()
        
        // Choose month with conditional
        function setMonth() {
            switch(getMonth) {
                case '01':
                    return 'Jan'
                    break
                
                case '02':
                    return 'Feb'
                    break
                    
                case '03':
                    return 'Mar'
                    break
                    
                case '04':
                    return 'Apr'
                    break
                    
                case '05':
                    return 'May'
                    break
                    
                case '06':
                    return 'Jun'
                    break
                    
                case '07':
                    return 'Jul'
                    break
                    
                case '08':
                    return 'Aug'
                    break
                    
                case '09':
                    return 'Sep'
                    break
                    
                case '10':
                    return 'Oct'
                    break
                    
                case '11':
                    return 'Nov'
                    break
                    
                default:
                    return 'Dec'
            }
        }   
        
        // Launch function
        let getDateTime = setDate(days, month, year)        
        config_interval(getDateTime)
    })    
})


// Setting Date
function setDate(days, month, year) {
    
    let getDateTime = new Date(month + ' ' + days + ', ' + year + ' 00:00:00').getTime()    
    return getDateTime
}


// Setting Interval
function config_interval(getDateTime) {
    
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24
    
    let interval = setInterval(() => {
    
        let now = new Date().getTime()
        let distance = getDateTime - now

        if (distance < 0) {
           clearInterval(interval)
        }

        document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second)

    }, second)   
    
    return interval
}