export const weatherData = [
	{
		title: 'Влажность',
		icon: 'humidity',
		value: '75 %',
		range: {
			maskPosition: '79px',
			leftValue: '75px',
		},
		valueRange: 75,
		humidity: true,
	},
	{
		title: 'Давление',
		icon: 'barometer',
		value: '761',
		value2: 91,
		param: 'Повышенное',
		pressure: true,
		range: {
			maskPosition: '96px',
			leftValue: '92px',
		},
	},
	{
		title: 'Видимость',
		icon: 'visibility',
		value: '28 км',
		param: 'Нормальная',
		range: {
			maskPosition: '31px',
			leftValue: '27px',
		},
	},
	{
		title: 'Рассвет',
		icon: 'sunrise',
		value: '8:42',
		param: 'Прошло:',
		time: '02:47',
	},
	{
		title: 'Закат',
		icon: 'sunset',
		value: '16:37',
		param: 'Осталось:',
		time: '05:08',
	},
	{
		title: 'Сила ветра',
		icon: 'direction',
		value: '2 м/с',
		param: 'Северо-западный',
	},
];
