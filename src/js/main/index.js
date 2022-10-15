//| Slider Volunteer Banners

const volunteersSwiper = new Swiper('.volunteersSwiper', {
	effect: 'fade',
	navigation: {
		nextEl: '.volunteers-recom__slider .swiper-controls .swiper-button-next',
		prevEl: '.volunteers-recom__slider .swiper-controls .swiper-button-prev'
	}
})

//| Custom select Lang

$(() => {
	$('select.clang_select').each(function () {
		var $this = $(this)

		var html = '<div class="clang_select"><div class="clang_select-placeholder"><p>'
		html += $this.find('option:eq(0)').text()
		html += '</p>'
		html += '<img src="'
		html += $this.find('option:eq(0)').attr('data-icon')
		html += '" alt="icons" />'
		html += '</div><div class="clang_select-block display-n"><div class="clang_select-wrapper">'
		$this.find('option:eq(0)').css('display', 'none')
		$this.find('option').each(function () {
			html +=
				'<button class="clang_select-element" data-val="' +
				$(this).attr('value') +
				'" type="button">' +
				'<p>' +
				$(this).text() +
				'</p>' +
				'<img src="' +
				$(this).attr('data-icon') +
				'" alt="icons" />' +
				'</button>'
		})
		html += '</div></div></div></div>'
		$(html).insertAfter($this.hide())

		$('.clang_select-element:eq(0)').addClass('clang_select-element-active')

		var $next = $this.next()
		$next
			.find('.clang_select-placeholder')
			.on('click', function (e) {
				e.preventDefault()
				$next.find('.clang_select-block').toggleClass('display-n'),
					$next.toggleClass('clang_select-item-active')
			})
			.end()
			.find('.clang_select-element')
			.on('click', function (e) {
				e.preventDefault()
				$('.clang_select-element').removeClass('clang_select-element-active')
				$(this).addClass('clang_select-element-active')
				$next.find('.clang_select-placeholder').html($(this).html())
				$this.val($(this).data('val')).trigger('change')
				$next.find('.clang_select-placeholder').trigger('click')
			})
	})
})

//| Phone Mask

$(function () {
	$('#phone__mask').mask('+7 (999) 999-99-99')
})

//| Custom Select

$(() => {
	$('select.c_select').each(function () {
		var $this = $(this)

		var html = '<div class="c_select"><div class="c_select-placeholder">'
		html += $this.find('option:eq(0)').text()
		html += '</div><div class="c_select-block display-n"><div class="c_select-wrapper">'
		$this.find('option:eq(0)').css('display', 'none')
		$this.find('option').each(function () {
			html +=
				'<button class="c_select-element" data-val="' +
				$(this).attr('value') +
				'" type="button">' +
				$(this).text() +
				'</button>'
		})
		html += '</div></div></div></div>'
		$(html).insertAfter($this.hide())

		$('.c_select-element[data-val="undefined"]').remove()

		var $next = $this.next()
		$next
			.find('.c_select-placeholder')
			.on('click', function (e) {
				e.preventDefault()
				$next.find('.c_select-block').toggleClass('display-n'),
					$next.toggleClass('c_select-item-active')
			})
			.end()
			.find('.c_select-element')
			.on('click', function (e) {
				e.preventDefault()
				$('.c_select-element').removeClass('c_select-element-active')
				$(this).addClass('c_select-element-active')
				$next.find('.c_select-placeholder').text($(this).text())
				$this.val($(this).data('val')).trigger('change')
				$next.find('.c_select-placeholder').trigger('click')
			})
	})
})
