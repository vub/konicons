// $(document).ready(function ($) {
var projects = [
    {
        id: 12,
        name: 'Chung cư 215 Hoàng Văn Thụ',
        investor: 'Công ty Cổ phần Đầu tư Xây dựng Tân Bình',
        scale: '02 tầng hầm, 21 tầng cao,<br>tổng diện tích sàn 15000 m<sup>2</sup>',
        job: 'Thiết kế kết cấu',
        year: '2017',
        images: [
            'DD-Chung cu 251 HVT-1.jpg'
        ],
        thumbnail: 'DD-Chung-cu-251-HVT-1-thumbnail.jpg'
    },
    {
        id: 16,
        name: 'Cao Ốc An Lạc',
        investor: 'CTCP Kinh doanh Địa ốc Hưng Thịnh ',
        scale: '02 tầng hầm, 19 tầng cao,<br>tổng diện tích sàn 58168 m<sup>2</sup>',
        job: 'Thẩm tra thiết kế kết cấu',
        year: '2017',
        images: [
            'DD-cao-oc-an-lac.jpg'
        ],
        thumbnail: 'DD-cao-oc-an-lac-thumbnail.jpg'
    },
    {
        id: 17,
        name: 'Bệnh Viện Mắt Quốc Tế Hoàn Mỹ Sài Gòn',
        investor: 'CTCP Bệnh Viện Mắt Quốc Tế Hoàn Mỹ Sài Gòn',
        scale: '02 tầng hầm, 12 tầng cao,<br>tổng diện tích sàn 5500 m<sup>2</sup>',
        job: 'Thiết kế kiến trúc, kết cấu và Cơ điện.',
        year: '2016',
        images: [
            'Benh-Vien-Mat-Quoc-Te-Hoan-My-1.jpg',
            'Benh-Vien-Mat-Quoc-Te-Hoan-My-2.jpg',
            'Benh-Vien-Mat-Quoc-Te-Hoan-My-3.jpg',
            'Benh-Vien-Mat-Quoc-Te-Hoan-My-4.jpg'
        ],
        thumbnail: 'Benh-Vien-Mat-Quoc-Te-Hoan-My-1-thumbnail.jpg'
    },
    {
        id: 1,
        name: 'Cao ốc văn phòng và căn hộ Luxcity',
        investor: 'Công ty Cổ phần Dịch vụ và<br> Xây dựng Địa ốc Đất Xanh',
        scale: '01 tầng hầm, 14 tầng cao, tổng diện tích 14000 m<sup>2</sup>',
        job: 'Thiết kế kết cấu',
        year: '2016',
        images: [
            'DD-Cao oc Van phong va Can ho Luxcity-1.jpg',
            'DD-Cao oc Van phong va Can ho Luxcity-2.jpg'
            ],
        thumbnail: 'DD-Cao-oc-Van-phong-va-Can-ho-Luxcity-1-thumbnail.jpg'
    },
    {
        id: 2,
        name: 'Cao ốc thương mại Sài Gòn ASIANA PLAZA',
        investor: 'Công ty Cổ phần Giải trí Miền Nam',
        scale: '12 tầng, tổng diện tích sàn 6000 m<sup>2</sup>',
        job: 'Thẩm tra thiết kế kết cấu',
        year: '2016',
        images: [
            'DD-Cao oc thuong mai Saigon Asiana Plaza-1.jpg',
            'DD-Cao oc thuong mai Saigon Asiana Plaza-2.jpg'
        ],
        thumbnail: 'DD-Cao-oc-thuong-mai-Saigon-Asiana-Plaza-1-thumbnail.jpg'
    },
    {
        id: 3,
        name: 'Nhà máy Hiệp Phú',
        investor: 'Công ty Cổ phần Hiệp Phú',
        scale: 'Tổng diện tích sàn 15000 m<sup>2</sup>',
        job: 'Thiết kế kết cấu',
        year: '2016',
        images: [
            'CN-Nha may Hiep Phu-1.jpg',
            'CN-Nha may Hiep Phu-2.jpg',
            'CN-Nha may Hiep Phu-3.jpg',
            'CN-Nha may Hiep Phu-4.jpg',
            'CN-Nha may Hiep Phu-5.jpg'
        ],
        thumbnail: 'CN-Nha-may-Hiep-Phu-1-thumbnail.jpg'
    },
    {
        id: 4,
        name: 'Nhà máy CHANGSIN',
        investor: 'Công ty TNHH Changsin',
        scale: 'Tổng diện tích sàn 30000 m<sup>2</sup>',
        job: 'Thiết kế kết cấu',
        year: '2015',
        images: [
            'CN-Nha May Changsin-1.jpg',
            'CN-Nha May Changsin-2.jpg',
            'CN-Nha May Changsin-3.jpg',
            'CN-Nha May Changsin-4.jpg'
        ],
        thumbnail: 'CN-Nha-May-Changsin-1-thumbnaiil.jpg'
    },
    {
        id: 5,
        name: 'Nhà máy CROWN Đà Nẵng',
        investor: 'Công ty TNHH Crown Đà Nẵng',
        scale: 'Tổng diện tích sàn 10000 m<sup>2</sup>',
        job: 'Thiết kế kết cấu',
        year: '2014',
        images: [
            'CN-Nha May Crown-1.JPG',
            'CN-Nha May Crown-2.JPG',
            'CN-Nha May Crown-3.JPG',
            'CN-Nha May Crown-4.JPG'
        ],
        thumbnail: 'CN-Nha-May-Crown-1-thumbnail.jpg'
    },
    {
        id: 9,
        name: 'Nhà văn hóa sinh viên tại đại học quốc gia TP Hồ Chí Minh',
        investor: 'Thành đoàn TP. Hồ Chí Minh',
        scale: 'Tổng diện tích sàn 29812 m<sup>2</sup>',
        job: 'Thiết kế kết cấu',
        year: '2014',
        images: [
            'DD-Nha van hoa sinh vien Dai hoc Quoc Gia TP.HCM-1.jpg',
            'DD-Nha van hoa sinh vien Dai hoc Quoc Gia TP.HCM-2.jpg',
            'DD-Nha van hoa sinh vien Dai hoc Quoc Gia TP.HCM-3.jpg',
            'DD-Nha van hoa sinh vien Dai hoc Quoc Gia TP.HCM-4.jpg',
            'DD-Nha van hoa sinh vien Dai hoc Quoc Gia TP.HCM-5.jpg',
            'DD-Nha van hoa sinh vien Dai hoc Quoc Gia TP.HCM-6.jpg'
        ],
        thumbnail: 'DD-Nha-van-hoa-sinh-vien-Dai-hoc-Quoc-Gia-TP-thumbnail.jpg'
    },
    {
        id: 10,
        name: 'Trung tâm sản xuất chương trình của đài truyền hình việt nam',
        investor: 'TTTH Việt Nam tại TP. Hồ Chí Minh',
        scale: '02 tầng hầm, 20 tầng cao,<br> tổng diện tích sàn 9000 m<sup>2</sup>',
        job: 'Thiết kế kết cấu',
        year: '2014',
        images: [
            'DD-Trung tam san xuat chuong trinh truyen hinh Viet Nam-1.jpg',
            'DD-Trung tam san xuat chuong trinh truyen hinh Viet Nam-2.jpg'
        ],
        thumbnail: 'DD-Trung-tam-san-xuat-chuong-trinh-truyen-hinh-Viet-Nam-1-thubmnail.jpg'
    },
    {
        id: 8,
        name: 'Trường cao đẳng nghề LILAMA',
        investor: 'Trường Cao đẳng nghề Lilama 2',
        scale: 'Tổng diện tích sàn 50000 m<sup>2</sup>',
        job: 'Thiết kế kết cấu',
        year: '2012',
        images: [
            'DD-Truong cao dang nghe Lilama-1.jpg',
            'DD-Truong cao dang nghe Lilama-2.jpg',
            'DD-Truong cao dang nghe Lilama-3.jpg',
            'DD-Truong cao dang nghe Lilama-4.jpg'
        ],
        thumbnail: 'DD-Truong-cao-dang-nghe-Lilama-1-thumbnail.jpg'
    },
    {
        id: 14,
        name: 'NHà ga hàng không Vietstar',
        investor: 'Công ty Hàng không Lưỡng dụng Ngôi Sao Việt',
        scale: '02 tầng, tổng diện tích sàn 35000 m<sup>2</sup>',
        job: 'Thiết kế kết cấu',
        year: '2012',
        images: [
            'DD-Nha ga hang khong Vietstar.jpg'
        ],
        thumbnail: 'DD-Nha-ga-hang-khong-Vietstar-thumbnail.jpg'
    },
    {
        id: 6,
        name: 'Chung cư D’evelyn',
        investor: 'Công ty Cổ phần Đầu tư và Sản xuất Việt Hàn',
        scale: '02 tầng hầm, 35 tầng cao,<br> tổng diện tích sàn 35000m<sup>2</sup>',
        job: 'Kiểm tra thiết kế kết cấu',
        year: '2011',
        images: [
            'DD-Chung cu Develyn-1.jpg',
            'DD-Chung cu Develyn-2.jpg'
        ],
        thumbnail: 'DD-Chung-cu-Develyn-1-thumbnail.jpg'
    },
    {
        id: 7,
        name: 'Khu phức hợp LACASA',
        investor: 'Công ty Cổ phần Vạn Phát Hưng',
        scale: '35 tầng, tổng diện tích sàn 70000 m<sup>2</sup>',
        job: 'Triển khai thiết kế kết cấu',
        year: '2011',
        images: [
            'DD-Chung cu Lacasa-1.jpg',
            'DD-Chung cu Lacasa-2.jpg'
        ],
        thumbnail: 'DD-Chung-cu-Lacasa-1-thumbnail.jpg'
    },
    {
        id: 15,
        name: 'Phương Liên Tịnh Xứ',
        investor: 'Phương Liên Tịnh Xứ',
        scale: 'Cao 55 m, tổng diện tích sàn 5000 m<sup>2</sup>',
        job: 'Thiết kế kết cấu',
        year: '2011',
        images: [
            'DD-phuong-lien-tinh-xu-2.jpg',
            'DD-phuong-lien-tinh-xu-1.jpg'
        ],
        thumbnail: 'DD-phuong-lien-tinh-xu-2-thumbnail.jpg'
    },
    {
        id: 13,
        name: 'Tòa nhà văn phòng IDT',
        investor: 'Công ty TNHH IDT',
        scale: ' 01 tầng hầm, 10 tầng cao,<br>tổng diện tích sàn 17000 m<sup>2</sup>',
        job: 'Thiết kế kết cấu',
        year: '2008',
        images: [
            'DD-Chung cu IDT-1.jpg',
            'DD-Chung cu IDT-2.jpg'
        ],
        thumbnail: 'DD-Chung-cu-IDT-1-thumbnail.jpg'
    },
    {
        id: 11,
        name: 'Bệnh viện Chợ Rẫy PHNOMPENH',
        investor: 'Bệnh viện Chợ Rẫy - Phnompenh',
        scale: '05 tầng, tổng diện tích sàn 8000 m<sup>2</sup>',
        job: 'Thiết kế kết cấu',
        year: '2007',
        images: [
            'DD-Benh vien Cho Ray Phnompenh-1.jpg'
        ],
        thumbnail: 'DD-Benh-vien-Cho-Ray-Phnompenh-1-thumbnail.jpg'
    }
    // {
    //     name: '',
    //     investor: '',
    //     scale: '<sup>2</sup>',
    //     job: '',
    //     year: '',
    //     images: [             ''
    // },
    // {
    //     name: '',
    //     investor: '',
    //     scale: '<sup>2</sup>',
    //     job: '',
    //     year: '',
    //     images: [             ''
    // }
];

var template = '<div class="cbp-item identity popup-gallery{{id}}">' +
    '<a href="assets/images/project/{{image}}" myid="{{id}}" class="cbp-caption open-popup-link" title="{{name}}">' +
    '<div class="cbp-caption-defaultWrap">' +
    '<img class="img-responsive lazy" src="assets/images/project/{{thumbnail}}" alt="">' +
    '</div>' +
    '<div class="cbp-caption-activeWrap"></div>' +
    '</a>' +
    '<div class="project-images-{{id}}">' +
    '<!--images-->' +
    '</div>' +
    '<div class="cbp-text">' +
    '<div class="cbp-project-title">{{name}}</div>' +
    '<div class="cbp-l-grid-work-desc">Chủ đầu tư: {{investor}}</div>' +
    '<div class="cbp-l-grid-work-desc">Quy mô: {{scale}}</div>' +
    '<div class="cbp-l-grid-work-desc">Công việc thực hiện: {{job}}</div>' +
    '<div class="cbp-l-grid-work-desc">Năm thực hiện: {{year}}</div>' +
    '</div>' +
    '</div>';

var image_template = '<a class="hide" href="assets/images/project/{{url}}" title="{{name}}"><img class="lazy" src="assets/images/project/{{url}}"></a>';

function render_images(image_template, link, title) {
    var result = image_template;
    result = result.replace('{{url}}', link);
    result = result.replace('{{url}}', link);
    result = result.replace('{{name}}', title);
    return result;
}

function render_list_images(project, image_template) {
    var image_html = '';

    if(project.images.length > 1) {
        project.images.forEach(function (item, index) {
            if (index == 0) {

            } else {
                image_html += render_images(image_template, item, project.name);
            }

        })
    }
    return image_html;
}

function render(template, image_template, project) {
    var result = template;
    result = result.replace('{{id}}', project.id);
    result = result.replace('{{id}}', project.id);
    result = result.replace('{{id}}', project.id);
    result = result.replace('{{image}}', project.images[0]);
    result = result.replace('{{thumbnail}}', project.thumbnail);
    result = result.replace('{{name}}', project.name);
    result = result.replace('{{name}}', project.name);
    result = result.replace('{{investor}}', project.investor);
    result = result.replace('{{scale}}', project.scale);
    result = result.replace('{{job}}', project.job);
    result = result.replace('{{year}}', project.year);

    // result = result.replace('<!--images-->', render_list_images(project, image_template));

    return result;
}

(function($, window, document, undefined) {

    projects.forEach(function (item, index) {
        $('#grid-container').append(render(template, image_template, item));
    });

// });

})(jQuery, window, document);

$(document).ready(function() {

    var magnificPopupConfigure = {
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                // return item.el.attr('title') + '<small></small>';
            }
        },
        callbacks: {
            beforeOpen: function () {
                console.log('Start of popup initialization');
                var magnificPopup = $.magnificPopup.instance,
                    cur = magnificPopup.st.el;
               var myid = cur.attr('myid');
                var project;
                // find image
               projects.forEach(function (item, index) {
                   if (item.id == myid) {
                       project = item;
                   }
               });

                project.images.forEach(function (item, index) {
                    if(index == 0) {

                    } else {
                        var image = { src: ""};
                        image.src = 'assets/images/project/' + item;
                        magnificPopup.items.push(image);
                    }

                });

                magnificPopup.updateItemHTML();
            }
        }
    };

    projects.forEach(function (item, index) {
        $('.popup-gallery'+ item.id).magnificPopup(magnificPopupConfigure);
    });

});