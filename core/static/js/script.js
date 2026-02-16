// =================== DATA ===================
const posts = [
    // {
    //     id: 0,
    //     title: 'راهنمای جامع شروع برنامه‌نویسی با پایتون در سال ۱۴۰۳',
    //     excerpt: 'اگر می‌خواهید برنامه‌نویسی را شروع کنید، پایتون بهترین انتخاب است. در این مقاله قدم به قدم مسیر یادگیری را بررسی می‌کنیم.',
    //     category: 'برنامه‌نویسی',
    //     author: 'علی محمدی',
    //     date: '۱۵ آبان ۱۴۰۳',
    //     readTime: '۱۲',
    //     views: '۳,۴۵۶',
    //     image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    //     tags: ['پایتون', 'برنامه‌نویسی', 'آموزش', 'مبتدی'],
    //     shortCode: 'py-start',
    //     content: '<p>پایتون یکی از محبوب‌ترین زبان‌های برنامه‌نویسی در جهان است که به دلیل سادگی و خوانایی بالا، بهترین انتخاب برای شروع یادگیری برنامه‌نویسی محسوب می‌شود.</p><h2>چرا پایتون؟</h2><p>پایتون به دلایل متعددی زبان اول بسیاری از برنامه‌نویسان است. سینتکس ساده، جامعه بزرگ، کتابخانه‌های فراوان و کاربرد گسترده در حوزه‌های مختلف از جمله هوش مصنوعی، توسعه وب، علم داده و اتوماسیون.</p><blockquote>«پایتون زبانی است که شما را مجبور نمی‌کند مفاهیم پیچیده را قبل از نوشتن اولین برنامه یاد بگیرید.»</blockquote><h2>مسیر یادگیری پیشنهادی</h2><ul><li><strong>مرحله ۱:</strong> آشنایی با مفاهیم پایه (متغیرها، شرط‌ها، حلقه‌ها)</li><li><strong>مرحله ۲:</strong> یادگیری توابع و ماژول‌ها</li><li><strong>مرحله ۳:</strong> برنامه‌نویسی شیءگرا (OOP)</li><li><strong>مرحله ۴:</strong> کار با فایل‌ها و دیتابیس</li><li><strong>مرحله ۵:</strong> فریمورک‌ها (Django, Flask)</li><li><strong>مرحله ۶:</strong> پروژه‌های عملی</li></ul><h2>ابزارهای مورد نیاز</h2><p>برای شروع کار با پایتون به ابزارهای زیادی نیاز ندارید. فقط کافی است پایتون را از سایت رسمی دانلود کنید و یک ویرایشگر کد مثل VS Code نصب کنید.</p><p>همچنین استفاده از محیط مجازی (Virtual Environment) برای مدیریت وابستگی‌ها بسیار توصیه می‌شود.</p><h2>جمع‌بندی</h2><p>یادگیری برنامه‌نویسی یک سفر طولانی اما لذت‌بخش است. مهم‌ترین نکته این است که مداوم تمرین کنید و از پروژه‌های عملی استفاده کنید.</p>'
    // },
    // {
    //     id: 1,
    //     title: 'آینده هوش مصنوعی و تأثیر آن بر زندگی روزمره',
    //     excerpt: 'هوش مصنوعی در حال تغییر دنیای ماست. از دستیارهای هوشمند تا خودروهای خودران، بیایید آینده را پیش‌بینی کنیم.',
    //     category: 'تکنولوژی',
    //     author: 'سارا احمدی',
    //     date: '۱۲ آبان ۱۴۰۳',
    //     readTime: '۸',
    //     views: '۲,۸۹۱',
    //     image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
    //     tags: ['هوش مصنوعی', 'تکنولوژی', 'آینده', 'یادگیری ماشین'],
    //     shortCode: 'ai-future',
    //     content: '<p>هوش مصنوعی (AI) دیگر یک مفهوم علمی تخیلی نیست. امروزه AI در همه جای زندگی ما حضور دارد.</p><h2>وضعیت فعلی هوش مصنوعی</h2><p>با ظهور مدل‌های زبانی بزرگ مثل GPT-4 و Claude، هوش مصنوعی وارد مرحله جدیدی شده است. این مدل‌ها قادرند متن تولید کنند، کد بنویسند و تصاویر بسازند.</p><blockquote>«هوش مصنوعی بزرگ‌ترین انقلاب تکنولوژیکی بعد از اینترنت خواهد بود.»</blockquote><h2>تأثیر بر مشاغل</h2><ul><li>مشاغل در حوزه توسعه و نگهداری سیستم‌های AI</li><li>تحلیلگران داده و متخصصان یادگیری ماشین</li><li>متخصصان اخلاق هوش مصنوعی</li><li>طراحان تجربه کاربری AI</li></ul><h2>نتیجه‌گیری</h2><p>آینده هوش مصنوعی هم هیجان‌انگیز و هم چالش‌برانگیز است. مهم‌ترین کار آشنایی با این تکنولوژی و استفاده از آن برای بهبود زندگی است.</p>'
    // },
    // {
    //     id: 2,
    //     title: 'معرفی فریمورک جنگو: چرا باید آن را یاد بگیرید؟',
    //     excerpt: 'جنگو یکی از قدرتمندترین فریمورک‌های وب پایتون است. بیایید ببینیم چرا شرکت‌های بزرگ از آن استفاده می‌کنند.',
    //     category: 'برنامه‌نویسی',
    //     author: 'علی محمدی',
    //     date: '۱۰ آبان ۱۴۰۳',
    //     readTime: '۱۰',
    //     views: '۱,۹۵۲',
    //     image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    //     tags: ['جنگو', 'پایتون', 'وب', 'فریمورک'],
    //     shortCode: 'django-intro',
    //     content: '<p>جنگو (Django) یک فریمورک وب سطح بالا با زبان پایتون است که توسعه سریع و طراحی تمیز را ترویج می‌دهد.</p><h2>چرا جنگو؟</h2><p>جنگو با فلسفه «باتری‌ها شامل شده» ساخته شده است. یعنی تقریباً هر چیزی که برای ساخت یک وب‌سایت نیاز دارید، به صورت پیش‌فرض وجود دارد.</p><blockquote>«جنگو برای ساخت وب‌سایت‌های بزرگ و مقیاس‌پذیر طراحی شده است.»</blockquote><h2>ویژگی‌های کلیدی</h2><ul><li>ORM قدرتمند برای کار با دیتابیس</li><li>پنل مدیریت خودکار</li><li>سیستم احراز هویت کامل</li><li>حفاظت در برابر حملات رایج وب</li><li>سیستم قالب‌بندی (Template) قوی</li></ul><h2>شرکت‌هایی که از جنگو استفاده می‌کنند</h2><p>اینستاگرام، پینترست، موزیلا، نشنال جئوگرافیک و بسیاری شرکت‌های بزرگ دیگر از جنگو استفاده می‌کنند.</p>'
    // },
    // {
    //     id: 3,
    //     title: '۱۰ عادت روزانه برای افزایش بهره‌وری برنامه‌نویسان',
    //     excerpt: 'برنامه‌نویسی فقط نوشتن کد نیست. عادت‌های روزانه شما تأثیر مستقیمی بر کیفیت کدنویسی دارند.',
    //     category: 'سبک زندگی',
    //     author: 'مریم رضایی',
    //     date: '۸ آبان ۱۴۰۳',
    //     readTime: '۶',
    //     views: '۴,۲۱۰',
    //     image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
    //     tags: ['بهره‌وری', 'سبک زندگی', 'برنامه‌نویسی', 'عادت'],
    //     shortCode: 'productivity',
    //     content: '<p>بهره‌وری یکی از مهم‌ترین فاکتورها در موفقیت یک برنامه‌نویس است. اما بهره‌وری فقط به ساعات کاری بیشتر مربوط نمی‌شود.</p><h2>عادت‌های صبحگاهی</h2><p>صبح زود بیدار شدن و داشتن یک روتین صبحگاهی مشخص، کلید شروع یک روز پربار است.</p><h2>تکنیک پومودورو</h2><p>این تکنیک ساده اما مؤثر شامل ۲۵ دقیقه تمرکز شدید و ۵ دقیقه استراحت است.</p><blockquote>«مهم نیست چند ساعت کار می‌کنید، مهم این است که در آن ساعات چقدر تمرکز دارید.»</blockquote><ul><li>صبح زود بیدار شوید و روتین ثابت داشته باشید</li><li>اول صبح سخت‌ترین کار را انجام دهید</li><li>از تکنیک پومودورو استفاده کنید</li><li>نوتیفیکیشن‌ها را خاموش کنید</li><li>هر روز ۳۰ دقیقه ورزش کنید</li><li>قبل از خواب کد نزنید</li></ul>'
    // },
    // {
    //     id: 4,
    //     title: 'آموزش کامل گیت و گیت‌هاب برای مبتدیان',
    //     excerpt: 'گیت ابزار ضروری هر برنامه‌نویسی است. در این مقاله از صفر تا صد گیت را یاد می‌گیرید.',
    //     category: 'آموزش',
    //     author: 'علی محمدی',
    //     date: '۵ آبان ۱۴۰۳',
    //     readTime: '۱۵',
    //     views: '۵,۶۷۸',
    //     image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop',
    //     tags: ['گیت', 'گیت‌هاب', 'آموزش', 'ورژن کنترل'],
    //     shortCode: 'git-guide',
    //     content: '<p>گیت (Git) یک سیستم کنترل نسخه توزیع‌شده است که توسط لینوس توروالدز ساخته شده. هر برنامه‌نویسی باید با گیت آشنا باشد.</p><h2>گیت چیست؟</h2><p>به زبان ساده، گیت مثل یک ماشین زمان برای کد شماست. هر تغییری ذخیره می‌شود و هر وقت خواستید می‌توانید برگردید.</p><h2>دستورات پرکاربرد</h2><ul><li><strong>git init:</strong> ایجاد مخزن جدید</li><li><strong>git add:</strong> اضافه کردن فایل‌ها</li><li><strong>git commit:</strong> ثبت تغییرات</li><li><strong>git push:</strong> ارسال تغییرات به سرور</li><li><strong>git pull:</strong> دریافت آخرین تغییرات</li><li><strong>git branch:</strong> مدیریت شاخه‌ها</li></ul><blockquote>«هر commit باید یک تغییر منطقی و مستقل را توصیف کند.»</blockquote>'
    // },
    // {
    //     id: 5,
    //     title: 'بهترین کتاب‌های برنامه‌نویسی که باید بخوانید',
    //     excerpt: 'معرفی ۱۰ کتاب برتر در حوزه برنامه‌نویسی که هر توسعه‌دهنده‌ای باید حداقل یک‌بار مطالعه کند.',
    //     category: 'کتاب',
    //     author: 'مریم رضایی',
    //     date: '۲ آبان ۱۴۰۳',
    //     readTime: '۷',
    //     views: '۲,۳۴۰',
    //     image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=400&fit=crop',
    //     tags: ['کتاب', 'برنامه‌نویسی', 'یادگیری', 'توسعه فردی'],
    //     shortCode: 'best-books',
    //     content: '<p>خواندن کتاب یکی از بهترین راه‌های یادگیری عمیق مفاهیم برنامه‌نویسی است.</p><h2>کتاب‌های پیشنهادی</h2><ul><li><strong>Clean Code</strong> - رابرت سی مارتین: اصول نوشتن کد تمیز</li><li><strong>The Pragmatic Programmer</strong> - اندرو هانت: نکات عملی توسعه نرم‌افزار</li><li><strong>Design Patterns</strong> - گروه چهار نفره: الگوهای طراحی</li><li><strong>Refactoring</strong> - مارتین فاولر: بهبود ساختار کد</li><li><strong>Introduction to Algorithms</strong> - CLRS: مرجع الگوریتم‌ها</li></ul><blockquote>«یک برنامه‌نویس خوب کسی است که همیشه در حال یادگیری است.»</blockquote>'
    // }
];

const comments = [
    { name: 'محمد حسینی', date: '۱۴ آبان ۱۴۰۳', text: 'مقاله بسیار عالی و جامعی بود. ممنون از زحمتی که کشیدید. خیلی به من کمک کرد.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop' },
    { name: 'زهرا کریمی', date: '۱۳ آبان ۱۴۰۳', text: 'من تازه شروع کرده‌ام و این مقاله مسیر را برام خیلی روشن کرد. آیا دوره آموزشی هم دارید؟', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop' },
    { name: 'علی محمدی', date: '۱۳ آبان ۱۴۰۳', text: 'ممنون زهرا جان! بله، به زودی دوره آموزشی جامع پایتون را منتشر خواهیم کرد.', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop', isReply: true },
    { name: 'رضا نوروزی', date: '۱۲ آبان ۱۴۰۳', text: 'لطفاً در مقالات بعدی بیشتر در مورد فریمورک‌ها توضیح دهید. مخصوصاً جنگو و فلسک.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop' },
    { name: 'نگار شریفی', date: '۱۱ آبان ۱۴۰۳', text: 'خیلی ممنون! بخش مسیر یادگیری خیلی مفید بود. 🙏', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop' },
];

// =================== THEME ===================
function initTheme() {
    const saved = localStorage.getItem('blog-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
}

function toggleTheme() {
    document.documentElement.classList.add('theme-transition');
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('blog-theme', next);
    updateThemeIcon(next);
    setTimeout(() => document.documentElement.classList.remove('theme-transition'), 400);
}

function updateThemeIcon(theme) {
    $('.theme-icon').text(theme === 'dark' ? '☀️' : '🌙');
}

// =================== MOBILE NAV ===================
function toggleMobileNav() {
    $('.mobile-nav, .mobile-nav-overlay').toggleClass('open');
}

function toggleMobileDropdown() {
    $('.mobile-dropdown-menu').slideToggle(250);
    const arrow = $('.mobile-dropdown-toggle .m-arrow');
    arrow.text(arrow.text() === '▾' ? '▴' : '▾');
}

// =================== MODALS ===================
function openModal(type) {
    $('#' + type + 'Modal').addClass('active');
    $('body').css('overflow', 'hidden');
}
function closeModal(type) {
    $('#' + type + 'Modal').removeClass('active');
    $('body').css('overflow', '');
}

// =================== TOAST ===================
function showToast(message, type) {
    var $toast = $('#toast');
    $toast.text(message).removeClass('show success error').addClass(type);
    setTimeout(function() { $toast.addClass('show'); }, 10);
    setTimeout(function() { $toast.removeClass('show'); }, 3500);
}

// =================== NEWSLETTER ===================
function subscribeNewsletter(inputId) {
    var email = $('#' + inputId).val().trim();

    if (!email || email.indexOf('@') === -1) {
        showToast('لطفاً ایمیل معتبر وارد کنید', 'error');
        return;
    }

    $.ajax({
        url: ENDPOINTS.newsletter,
        type: 'POST',
        data: {
            email: email,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        beforeSend: function() {
            // Optional: disable button during request
            $('#' + inputId).prop('disabled', true);
        },
        success: function(response) {
            if (response.success){
                showToast(response.message, 'success');
            } else {
                showToast(response.message, 'error');
            }
            $('#' + inputId).val(''); // Clear input
        },
        error: function(xhr) {
            var errorMsg = 'خطا در ثبت ایمیل';

            showToast(errorMsg, 'error');
        },
    });
}

// =================== Contact ===================
function submitContact() {
    var name = $('#contactName').val().trim();
    var email = $('#contactEmail').val().trim();
    var subject = $('#contactSubject').val().trim();
    var message = $('#contactMessage').val().trim();

    if (!email || email.indexOf('@') === -1) {
        showToast('لطفاً ایمیل معتبر وارد کنید', 'error');
        return;
    }

    $.ajax({
        url: ENDPOINTS.contact,
        type: 'POST',
        data: {
            name: name,
            email: email,
            subject: subject,
            message: message,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(response) {
            showToast('پیام شما با موفقیت ارسال شد', 'success');
        },
        error: function(xhr) {
            var errorMsg = 'خطا در ثبت ایمیل';

            showToast(errorMsg, 'error');
        },
    });
}

// =================== AUTH ===================
function doLogin() {
    var email = $('#emailLogin').val().trim();
    var password = $('#passwordLogin').val().trim();

    $.ajax({
        url: ENDPOINTS.login,
        type: 'POST',
        data: {
            email: email,
            password: password,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(response) {
            if (response.success){
                showToast(response.message, 'success');
            } else {
                showToast(response.errors, 'error');

            }
        },
        error: function(xhr) {
            var errorMsg = 'خطا';
            showToast(errorMsg, 'error');
        },
    });

    showToast('با موفقیت وارد شدید! 🎉', 'success');
    // window.location.reload();
}
function doSignup() {
    var first_name = $('#nameSignup').val().trim();
    var last_name = $('#lastnameSignup').val().trim();
    var email = $('#emailSignup').val().trim();
    var password1 = $('#password1Signup').val().trim();
    var password2 = $('#password2Signup').val().trim();

    if (!first_name || !last_name || !email || !password1 || !password2){
        showToast('همه فیلد ها را پر کنید', 'error');
        return;
    }

    if (password1 !== password2){
        showToast('رمز عبور ها باید یکسان باشند', 'error');
        return;
    }
    $.ajax({
        url: ENDPOINTS.signup,
        type: 'POST',
        data: {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password1: password1,
            password2: password2,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(response) {
            if (response.success){
                showToast(response.message, 'success');
            } else {
                showToast(response.errors, 'error');

            }
        },
        error: function(xhr) {
            var errorMsg = 'خطا';
            showToast(errorMsg, 'error');
        },
    });

    // showToast('حساب کاربری شما با موفقیت ایجاد شد! 🎉', 'success');
    closeModal('signup');
}

// =================== URL PARAMS ===================
function getUrlParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// =================== NAV ACTIVE STATE ===================
function setActiveNav() {
    var path = window.location.pathname;
    var filename = path.split('/').pop() || 'index.html';
    var cat = getUrlParam('cat');

    $('.nav > a, .nav-dropdown > .dropdown-toggle').removeClass('active');
    $('.mobile-nav > a').removeClass('active');

    if (filename === 'about.html') {
        $('.nav > a[href="about.html"]').addClass('active');
    } else if (filename === 'contact.html') {
        $('.nav > a[href="contact.html"]').addClass('active');
    } else if (cat || filename === 'index.html' || filename === '') {
        if (cat) {
            $('.nav-dropdown > .dropdown-toggle').addClass('active');
        } else {
            $('.nav > a[href="index.html"]').first().addClass('active');
        }
    }
}

// =================== RENDER FUNCTIONS ===================
function renderPosts(container, postsToRender) {
    var html = '';
    postsToRender.forEach(function(post) {
        html += '<a href="post.html?id=' + post.id + '" class="post-card post-card-horizontal">' +
            '<div class="post-thumb"><img src="' + post.image + '" alt="' + post.title + '"></div>' +
            '<div class="post-card-body">' +
                '<span class="post-cat">' + post.category + '</span>' +
                '<h3>' + post.title + '</h3>' +
                '<p>' + post.excerpt + '</p>' +
                '<div class="post-meta">' +
                    '<span class="author"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop" alt="">' + post.author + '</span>' +
                    '<span>📅 ' + post.date + '</span>' +
                    '<span>⏱ ' + post.readTime + ' دقیقه</span>' +
                '</div>' +
                '<div class="post-tags">' + post.tags.slice(0, 3).map(function(t) { return '<span class="post-tag">#' + t + '</span>'; }).join('') + '</div>' +
            '</div>' +
        '</a>';
    });
    html += '<div class="pagination"><a href="#">«</a><span class="active">۱</span><a href="#">۲</a><a href="#">۳</a><a href="#">»</a></div>';
    $(container).html(html);
}

function renderRecentPosts(container) {
    var html = '';
    posts.slice(0, 4).forEach(function(post) {
        html += '<div class="recent-post"><a href="post.html?id=' + post.id + '">' +
            '<img src="' + post.image + '" alt="">' +
            '<div><h4>' + post.title.substring(0, 50) + '...</h4>' +
            '<div class="date">📅 ' + post.date + '</div></div>' +
        '</a></div>';
    });
    $(container).html(html);
}

function renderComments(container) {
    var html = '';
    comments.forEach(function(c) {
        html += '<div class="comment ' + (c.isReply ? 'comment-reply' : '') + '">' +
            '<img src="' + c.avatar + '" alt="">' +
            '<div><span class="name">' + c.name + '</span>' +
            '<span class="c-date">' + c.date + '</span>' +
            '<p>' + c.text + '</p>' +
            '<button class="reply-btn">↩ پاسخ</button></div></div>';
    });
    $(container).html(html);
}

function renderRelatedPosts(container, currentId) {
    var related = posts.filter(function(p) { return p.id !== currentId; }).slice(0, 3);
    var html = '';
    related.forEach(function(post) {
        html += '<div class="related-card"><a href="post.html?id=' + post.id + '">' +
            '<img src="' + post.image + '" alt="">' +
            '<div class="body"><span class="post-cat" style="font-size:11px;margin-bottom:6px;">' + post.category + '</span>' +
            '<h4>' + post.title.substring(0, 45) + '...</h4>' +
            '<span class="date">📅 ' + post.date + '</span></div>' +
        '</a></div>';
    });
    $(container).html(html);
}

// =================== SHORT URL ===================
function copyShortUrl() {
    var input = document.getElementById('shortUrlInput');
    var url = input.value;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function() {
            showToast('لینک کوتاه کپی شد! 🔗', 'success');
        });
    } else {
        input.select();
        document.execCommand('copy');
        showToast('لینک کوتاه کپی شد! 🔗', 'success');
    }
}

// =================== COMMENT SUBMIT ===================
function submitComment(comment_url) {
    var text = $('#commentText').val().trim();
    console.log(text)
    if (!text) {
        showToast('لطفاً تمام فیلدها را پر کنید', 'error');
        return;
    }

    $.ajax({
        url: comment_url,
        type: 'POST',
        data: {
            content: text,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(response) {
            if (response.success){
                showToast(response.message, 'success');
            } else {
                showToast(response.message, 'error');

            }
        },
        error: function(xhr) {
            var errorMsg = 'خطا در ثبت کامنت';
            showToast(errorMsg, 'error');
        },
    });

    // comments.unshift({
    //     name: name,
    //     date: 'همین الان',
    //     text: text,
    //     avatar: ENDPOINTS.default_comment_avatar
    // });
    // renderComments('#commentsList');
    // $('#commentName').val('');
    // $('#commentEmail').val('');
    $('#commentText').val('');
    // showToast('نظر شما با موفقیت ثبت شد! ✅', 'success');
}

// // =================== PAGE INIT FUNCTIONS ===================
// function initHomePage() {
//     var cat = getUrlParam('cat');
//     var search = getUrlParam('search');
//
//     if (cat) {
//         $('#homeView').hide();
//         $('#categoryView').show();
//         $('#categoryTitle').text('📂 دسته‌بندی: ' + decodeURIComponent(cat));
//         var filtered = posts.filter(function(p) { return p.category === decodeURIComponent(cat); });
//         renderPosts('#categoryPosts', filtered.length > 0 ? filtered : posts);
//     } else if (search) {
//         var q = decodeURIComponent(search);
//         $('#homeView').hide();
//         $('#categoryView').show();
//         $('#categoryTitle').text('🔍 نتایج جستجو: ' + q);
//         var results = posts.filter(function(p) {
//             return p.title.indexOf(q) > -1 || p.excerpt.indexOf(q) > -1 || p.tags.some(function(t) { return t.indexOf(q) > -1; });
//         });
//         if (results.length > 0) {
//             renderPosts('#categoryPosts', results);
//         } else {
//             $('#categoryPosts').html('<div style="text-align:center;padding:60px;color:var(--text-light);"><h3>نتیجه‌ای یافت نشد 😕</h3><p>لطفاً عبارت دیگری را جستجو کنید.</p></div>');
//         }
//     } else {
//         renderPosts('#postsList', posts);
//     }
//     renderRecentPosts('#recentPosts');
// }
//
// function initPostPage() {
//     var id = parseInt(getUrlParam('id'));
//     if (isNaN(id) || !posts[id]) {
//         window.location.href = 'index.html';
//         return;
//     }
//     var post = posts[id];
//
//     document.title = post.title + ' | نوشتار';
//     $('#detailTitle').text(post.title);
//     $('#detailBreadTitle').text(post.title.substring(0, 30) + '...');
//     $('#detailCatLink').text(post.category).attr('href', 'index.html?cat=' + encodeURIComponent(post.category));
//     $('#detailAuthor').text(post.author);
//     $('#detailDate').text(post.date);
//     $('#detailReadTime').text(post.readTime);
//     $('#detailViews').text(post.views);
//     $('#detailCommentCount').text('۵');
//     $('#detailCover').attr('src', post.image);
//     $('#detailContent').html(post.content);
//     $('#authorBoxName').text(post.author);
//
//     // Short URL
//     var shortUrl = 'nvsht.ir/p/' + post.shortCode;
//     $('#shortUrlInput').val(shortUrl);
//
//     // Tags
//     var tagsHtml = '<span>🏷️ برچسب‌ها:</span>';
//     post.tags.forEach(function(t) { tagsHtml += '<a href="index.html?search=' + encodeURIComponent(t) + '" class="post-tag">#' + t + '</a>'; });
//     $('#detailTags').html(tagsHtml);
//
//     renderRelatedPosts('#relatedPosts', id);
//     renderComments('#commentsList');
//     renderRecentPosts('#detailRecentPosts');
// }

// =================== GLOBAL INIT ===================
$(document).ready(function() {
    initTheme();
    setActiveNav();

    // Close modal on overlay click
    $('.modal-overlay').on('click', function(e) {
        if (e.target === this) {
            $(this).removeClass('active');
            $('body').css('overflow', '');
        }
    });

    // Back to top
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 400) {
            $('#backToTop').addClass('show');
        } else {
            $('#backToTop').removeClass('show');
        }
    });

    // Search
    $('#searchInput, #heroSearchInput').on('keyup', function(e) {
        if (e.key === 'Enter') {
            var q = $(this).val().trim();
            if (q) window.location.href = `${BASE_URL}?search=` + encodeURIComponent(q);
        }
    });

    // Hero search button
    $('#heroSearchBtn').on('click', function() {
        var q = $('#heroSearchInput').val().trim();
        if (q) window.location.href = '?search=' + encodeURIComponent(q);
    });

    // Page-specific init
    var page = window.location.pathname.split('/').pop() || 'index.html';
    if (page === 'index.html' || page === '') {
        initHomePage();
    } else if (page === 'post.html') {
        initPostPage();
    }
});
