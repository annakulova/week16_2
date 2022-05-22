let auto_prices = new Array();
auto_prices["2013 и ранее"]=400000;
auto_prices["2014 - 2016"]=1000000;
auto_prices["2017 - 2019"]=1200000;
auto_prices["2020 - 2022"]=1600000;

let brand_prices = new Array();
brand_prices["None"]=0;
brand_prices["BMW"]=1600000;
brand_prices["Mercedes-Benz"]=1800000;
brand_prices["Audi"]=1400000;
brand_prices["Lexus"]=130000;
brand_prices["Rolls-Royce"]=2800000;

function getAutoSizePrice() {
    let autoRadio = document.getElementsByName('selectedauto');

	for (i=0; i < autoRadio.length; i++) {
		if (autoRadio[i].checked) {
			user_input = autoRadio[i].value;
		}
	}

	return auto_prices[user_input];
}


function getBrandPrice() {
	let brandSelect = document.getElementById('brand');

	return brand_prices[brandSelect.value];
}


function getOptionPrice() {
	let autoOption = document.getElementById('includeoption');

	if(autoOption.checked) {
		return(20000);
	} else {
		return(0);
	}
}


function getParkingPrice() {
	let autoParking = document.getElementById('includeparking');

	if(autoParking.checked) {
		return(7000);
	} else {
		return(0);
	}
}

function calculateTotal() {
	let total = getAutoSizePrice() + getBrandPrice() + getOptionPrice() + getParkingPrice();
	let totalEl = document.getElementById('totalPrice');

	document.getElementById('totalPrice').innerHTML = "Стоимость выбранного авто: " + total;
	totalEl.style.display = 'block';
}

function hideTotal() {
	let totalEl = document.getElementById('totalPrice');
	totalEl.style.display = 'none';
}