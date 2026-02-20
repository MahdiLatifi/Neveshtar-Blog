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
    setTimeout(function () {
        $toast.addClass('show');
    }, 10);
    setTimeout(function () {
        $toast.removeClass('show');
    }, 3500);
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
        beforeSend: function () {
            $('#' + inputId).prop('disabled', true);
        },
        success: function (response) {
            showToast(response.message, 'success');
            $('#' + inputId).val('');
        },
        error: function (xhr) {
            var errorMsg = 'خطا در ثبت ایمیل';
            showToast(errorMsg, 'error');
        },
        complete: function () {
            $('#' + inputId).prop('disabled', false);
        }
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
        success: function (response) {
            showToast('پیام شما با موفقیت ارسال شد', 'success');
        },
        error: function (xhr) {
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
        success: function (response) {
            if (response.success) {
                showToast(response.message, 'success');
                location.reload()
                return null;
            } else {
                showToast(response.errors, 'error');
                return null;
            }
        },
        error: function (xhr) {
            var errorMsg = 'خطا';
            showToast(errorMsg, 'error');
                return null;
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

    if (!first_name || !last_name || !email || !password1 || !password2) {
        showToast('همه فیلد ها را پر کنید', 'error');
        return;
    }

    if (password1 !== password2) {
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
        success: function (response) {
            if (response.success) {
                showToast(response.message, 'success');
            } else {
                showToast(response.errors, 'error');

            }
        },
        error: function (xhr) {
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
    postsToRender.forEach(function (post) {
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
            '<div class="post-tags">' + post.tags.slice(0, 3).map(function (t) {
                return '<span class="post-tag">#' + t + '</span>';
            }).join('') + '</div>' +
            '</div>' +
            '</a>';
    });
    html += '<div class="pagination"><a href="#">«</a><span class="active">۱</span><a href="#">۲</a><a href="#">۳</a><a href="#">»</a></div>';
    $(container).html(html);
}

function renderRecentPosts(container) {
    var html = '';
    posts.slice(0, 4).forEach(function (post) {
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
    comments.forEach(function (c) {
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
    var related = posts.filter(function (p) {
        return p.id !== currentId;
    }).slice(0, 3);
    var html = '';
    related.forEach(function (post) {
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
        navigator.clipboard.writeText(url).then(function () {
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
        success: function (response) {
            if (response.success) {
                showToast(response.message, 'success');
            } else {
                showToast(response.message, 'error');

            }
        },
        error: function (xhr) {
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

// =================== GLOBAL INIT ===================
$(document).ready(function () {
    initTheme();
    setActiveNav();

    // Close modal on overlay click
    $('.modal-overlay').on('click', function (e) {
        if (e.target === this) {
            $(this).removeClass('active');
            $('body').css('overflow', '');
        }
    });

    // Back to top
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 400) {
            $('#backToTop').addClass('show');
        } else {
            $('#backToTop').removeClass('show');
        }
    });

    // Search
    $('#searchInput, #heroSearchInput').on('keyup', function (e) {
        if (e.key === 'Enter') {
            var q = $(this).val().trim();
            if (q) window.location.href = `${BASE_URL}?search=` + encodeURIComponent(q);
        }
    });

    // Hero search button
    $('#heroSearchBtn').on('click', function () {
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
