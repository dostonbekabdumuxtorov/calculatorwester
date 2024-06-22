let ishora_ishlatildimi = false;
let nuqta_ishlatildi = false;
let ishora_ishlatildi = false;

function Add(son) {
	if(Ekran.value == '0' && son == '0'){
		alert("boshqa nol qoshomisan")
	}else{
		Ekran.value += son;
		ishora_ishlatildimi = false;
		ishora_ishlatildi = false;

	}
}

function Signs(amal) {
    if (Ekran.value === "") {
        if (amal == "-") {
            Ekran.value += amal;
            ishora_ishlatildi = true;
        } else {
            alert("boshidanoq belgi ishlatmeng");
        }
    } else {
        if (ishora_ishlatildimi) {
            alert("ishorani ishlatdiz");
        } else {
            if (nuqta_ishlatildi) {
                alert("nuqtadan keyin ishora ishlatma");
            } else {
                Ekran.value += amal;
                ishora_ishlatildi = true;
                nuqta_ishlatildi = false;
                ishora_ishlatildimi = true;
            }
        }
    }
}

function Teng() {
    Ekran.value = eval(Ekran.value);
}



function Dot(amal) {
    if (Ekran.value === "") {
        alert("Boshidan nuqta yozmang");
    } else {
        if (nuqta_ishlatildi) {
            alert("faqat bir marta nuqta ishla");
        } else {
            if (ishora_ishlatildi) {
                alert("ishoradan keyin nuqta qoyma");
            } else {
                Ekran.value += amal;
                nuqta_ishlatildi = true;
            }
        }
    }
}

function Clear() {
    Ekran.value = "";
}
