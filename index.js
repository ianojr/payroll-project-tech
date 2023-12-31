
let form = document.getElementById('my_form');
form.addEventListener('submit', function(e){
    e.preventDefault();


    let input = document.getElementById('input_salary').value

    let nssf1 = 360
    let nssf2 = 720

    let paye;
    let nhif;

    //lets calculate the nhif
    if (input <= 5999){
        nhif = 150
    }
    else if(input > 5999 && input <= 7999){
        nhif = 300
    }
    else if(input > 7999 && input <= 11999){
        nhif = 400
    }
    else if(input > 11999 && input <= 14999){
        nhif = 500
    }
    else if(input > 14999 && input <= 19999){
        nhif = 600
    }
    else if(input > 19999 && input <= 24999){
        nhif = 750
    }
    else if(input > 19999 && input <= 29999){
        nhif = 850
    }
    else if(input > 29999 && input <= 34999){
        nhif = 900
    }
    else if(input > 34999 && input <= 39999){
        nhif = 950
    }
    else if(input > 39999 && input <= 44999){
        nhif = 1000
    }
    else if(input > 44999 && input <= 49999){
        nhif = 1100
    }
    else if(input > 49999 && input <= 59999){
        nhif = 1200
    }
    else if(input > 59999 && input <= 69999){
        nhif = 1300
    }
    else if(input > 69999 && input <= 79999){
        nhif = 1400
    }
    else if(input > 79999 && input <= 89999){
        nhif = 1500
    }
    else if(input > 89999 && input <= 99000){
        nhif = 1600
    }else{
        nhif = 1700
    }

    let rate;
    // calculating the paye
    if (input >= 24000){
        if (input > 0 && input <= 24000){
            rate = 0.1
        }
        else if(input > 24000 && input <= 32333){
            rate = 0.25
        }
        else if(input > 32333){
            rate = 0.3
        }
    }else{
        rate = 0
    }
    paye = (input*rate)

    //calculating the net pay
    let net_salary = (input - ((nssf1+nhif)+paye)+2400)


    document.getElementById('base_salary').innerHTML = input
    document.getElementById('nssf_tier_1').innerHTML = nssf1
    document.getElementById('nssf_tier_2').innerHTML = nssf2
    document.getElementById('final_paye').innerHTML = paye
    document.getElementById('nhif').innerHTML = nhif
    document.getElementById('net_pay').innerHTML = net_salary

    form.reset()
})