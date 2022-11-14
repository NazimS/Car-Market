$(() => {
    $("#menu2-btn").click(function () { $("#menu2-list").slideToggle() })
})
let data = [{
    marka: 'Tesla',
    model: 'Model3',
    yanacaq: 'Elektrik',
    price: '50000 ₼',
    image: 'img/tesla1.png',
    color: 'Qırmızı',
    ili: '2021'
},
{
    marka: 'BMW',
    model: 'M3',
    yanacaq: 'Benzin',
    price: '33000 ₼',
    image: 'img/bmw.png',
    color: 'Mavi',
    ili: '2019'
},
{
    marka: 'Ford',
    model: 'Explorer',
    yanacaq: 'Dizel',
    price: '42500 ₼',
    image: 'img/fordex.png',
    color: 'Mavi',
    ili: '2020'
},
{
    marka: 'Toyota',
    model: 'Prius',
    yanacaq: 'Hibrid',
    price: '22000 ₼',
    image: 'img/prius30k.png',
    color: 'Metallik',
    ili: '2020'
},
{
    marka: 'BMW',
    model: 'X6',
    yanacaq: 'Benzin',
    price: '40000 ₼',
    image: 'img/bmwx6.png',
    color: 'Ağ',
    ili: '2019'
},
{
    marka: 'Mitsubishi',
    model: 'Pajero',
    yanacaq: 'Benzin',
    price: '31000 ₼',
    image: 'img/pajero1.png',
    color: 'Ağ',
    ili: '2008'
},
{
    marka: 'Toyota',
    model: 'Camry',
    yanacaq: 'Benzin',
    price: '28000 ₼',
    image: 'img/camry.png',
    color: 'Qara',
    ili: '2015'
},
{
    marka: 'Mercedes',
    model: 'GL',
    yanacaq: 'Benzin',
    price: '30000 ₼',
    image: 'img/gl1.png',
    color: 'Ağ',
    ili: '2020'
},
{
    marka: 'Hyundai',
    model: 'Sonata',
    yanacaq: 'Benzin',
    price: '22500 ₼',
    image: 'img/sonata.png',
    color: 'Narıncı',
    ili: '2018'
},
{
    marka: 'Honda',
    model: 'CR-V',
    yanacaq: 'Dizel',
    price: '42500 ₼',
    image: 'img/crv.png',
    color: 'Qəhvəyi',
    ili: '2020'
},
{
    marka: 'Mercedes',
    model: 'e220',
    yanacaq: 'Dizel',
    price: '32500 ₼',
    image: 'img/e220.png',
    color: 'Ağ',
    ili: '2019'
},

{
    marka: 'Kia',
    model: 'Stringer',
    yanacaq: 'Benzin',
    price: '35000 ₼',
    image: 'img/kiastringer.png',
    color: 'Sarı',
    ili: '2021'
}
]

let cars = '',
    makes = '',
    models = '',
    fuel = '',
    prices = '',
    colors = '' ,
    years = ''

for (let i = 0; i < data.length; i++) {
    marka = data[i].marka,
        model = data[i].model,
        yanacaq = data[i].yanacaq,
        price = data[i].price,
        rawPrice = price.replace('₼', ''),
        color = data[i].color,
        ili = data[i].ili,
        image = data[i].image

    //car cardini yaratmaq
    cars +=
        "<div class='col-sm-4 car' data-marka='" +
        marka +
        "' data-model='" +
        model +
        "' data-yanacaq='" +
        yanacaq +
        "' data-price='" +
        rawPrice +
        "'data-color='" +
        color +
        "'data-ili='" +
        ili +
        "'><div class='cars-inner text-center'><img src='" +
        image +
        "'><br />Marka: " +
        marka +
        '<br />Model: ' +
        model +
        '<br />Yanacaq: ' +
        yanacaq +
        '<br />Qiymət: ' +
        price +
        '<br />Rəng: ' +
        color +
        '<br />Buraxılış ili: ' +
        ili +
        '</div></div>'

    //markanin dropdownu yaratmaq
    if (makes.indexOf("<option value='" + marka + "'>" + marka + '</option>') == -1) {
        makes += "<option value='" + marka + "'>" + marka + '</option>'
    }

    //modelin dropdownu yaratmaq
    if (models.indexOf("<option value='" + model + "'>" + model + '</option>') == -1) {
        models += "<option value='" + model + "'>" + model + '</option>'
    }

    //novunun dropdownu yaratmaq
    if (fuel.indexOf("<option value='" + yanacaq + "'>" + yanacaq + '</option>') == -1) {
        fuel += "<option value='" + yanacaq  + "'>" + yanacaq + '</option>'
    }
    //qiymet dropdownu yaratmaq
    if (prices.indexOf("<option value='" + price + "'>" + price + '</option>') == -1) {
        prices += "<option value='" + price + "'>" + price + '</option>'
    }
    //reng dropdownu yaratmaq
    if (colors.indexOf("<option value='" + color + "'>" + color + '</option>') == -1) {
        colors += "<option value='" + color + "'>" + color + '</option>'
    }
    if (years.indexOf("<option value='" + ili + "'>" + ili + '</option>') == -1) {
        years += "<option value='" + ili + "'>" + ili + '</option>'
    }
}

$('#cars').html(cars)
$('.filter-marka').append(makes)
$('.filter-model').append(models)
$('.filter-yanacaq').append(fuel)
$('.filter-price').append(prices)
$('.filter-color').append(colors)
$('.filter-ili').append(years)

let filtersObject = {}

//filterlerin deyismesi
$('.filter').on('change', function () {
    let filterName = $(this).data('filter'),
        filterVal = $(this).val()

    if (filterVal == '') {
        delete filtersObject[filterName]
    } else {
        filtersObject[filterName] = filterVal
    }

    let filters = ''

    for (let key in filtersObject) {
        if (filtersObject.hasOwnProperty(key)) {
            if (key === 'price') {
                let rawPrice = filtersObject[key].replace('₼', '').replace(',', '') //secilmis qiymete uygun tapmaq
                filters += '[data-' + key + "='" + rawPrice + "']"
            } else {
                filters += '[data-' + key + "='" + filtersObject[key] + "']"
            }
        }
    }

    if (filters == '') {
        $('.car').show()
    } else {
        $('.car').hide()
        $('.car').hide().filter(filters).show()
    }
})

//search duymesi basilanda
$('#search-form').submit(function (e) {
    e.preventDefault()
    let query = $('#search-form input').val().toLowerCase()

    $('.car').hide()
    $('.car').each(function () {  // kicik herfle yazilanda da tapsin
        let marka = $(this).data('marka').toLowerCase(),
            model = $(this).data('model').toLowerCase(),
            yanacaq = $(this).data('yanacaq').toLowerCase(),
            color = $(this).data('color').toLowerCase()
        // parametrlerin indeksini tanisin
        if (marka.indexOf(query) > -1 || model.indexOf(query) > -1 || yanacaq.indexOf(query) > -1 || color.indexOf(query) > -1) {
            $(this).show()
        }
    })
})