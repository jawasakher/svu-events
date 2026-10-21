// events data
var EVENTS_DATA = {
    reading: {
        tag: "ثقافي",
        tagClass: "tag-culture",
        title: "تحدّي القراءة الجامعي",
        date: "2026-11-15",
        time: "10:00 ص - 2:00 م",
        location: "المكتبة الجامعية",
        description: "مسابقة تنافسية تهدف إلى إحياء شغف المطالعة وتطوير مهارات النقد والتحليل لدى الطلاب.",
        images: [
            "assets/img/reading-1.jpg",
            "assets/img/reading-2.jpg",
            "assets/img/reading-3.jpg",
            "assets/img/reading-4.jpg"
        ]
    },
    poetry: {
        tag: "ثقافي",
        tagClass: "tag-culture",
        title: "أمسية أدبية وشعرية",
        date: "2026-11-18",
        time: "6:00 م - 9:00 م",
        location: "المدرج الجامعي",
        description: "ملتقى يجمع المواهب الشابة لإلقاء قصائد ومقطوعات أدبية مميزة ترافقها معزوفات موسيقية دافئة.",
        images: [
            "assets/img/poetry-1.jpg",
            "assets/img/poetry-2.jpg",
            "assets/img/poetry-3.jpg",
            "assets/img/poetry-4.jpg"
        ]
    },
    cyber: {
        tag: "تقني",
        tagClass: "tag-tech",
        title: "ورشة الأمن السيبراني والسلامة الرقمية",
        date: "2026-11-22",
        time: "10:00 ص - 2:00 م",
        location: "مخبر الحاسوب",
        description: "ورشة عمل تفاعلية تهدف إلى نشر الوعي حول السلامة الرقمية وحماية البيانات الشخصية والمؤسساتية ضد التهديدات والهجمات السيبرانية الحديثة. تتضمن الورشة تطبيقات عملية حول كيفية تشفير البيانات، واكتشاف ثغرات الهندسة الاجتماعية، وتأمين الحسابات الرقمية.",
        images: [
            "assets/img/cyber-1.jpg",
            "assets/img/cyber-2.jpg",
            "assets/img/cyber-3.jpg",
            "assets/img/cyber-4.jpg"
        ]
    },
    hackathon: {
        tag: "تقني",
        tagClass: "tag-tech",
        title: "هاكاثون الحلول الرقمية",
        date: "2026-11-28",
        time: "9:00 ص - 6:00 م",
        location: "قاعة الهاكاثون والابتكار الرقمي",
        description: "منافسة برمجية مكثفة لابتكار حلول رقمية ذكية وتطبيقات عملية لمشاكل واقعية تواجه المجتمع.",
        images: [
            "assets/img/hackathon-1.jpg",
            "assets/img/hackathon-2.jpg",
            "assets/img/hackathon-3.jpg",
            "assets/img/hackathon-4.jpg"
        ]
    },
    projects: {
        tag: "علمي",
        tagClass: "tag-science",
        title: "ملتقى المشاريع العلمية",
        date: "2026-12-05",
        time: "10:00 ص - 5:00 م",
        location: "قاعة المعارض العلمية",
        description: "معرض جامعي متميز يتيح للطلاب فرصة استعراض مشاريع تخرجهم وأبحاثهم المبتكرة أمام الأكاديميين.",
        images: [
            "assets/img/projects-1.jpg",
            "assets/img/projects-2.jpg",
            "assets/img/projects-3.jpg",
            "assets/img/projects-4.jpg"
        ]
    },
    "science-challenge": {
        tag: "علمي",
        tagClass: "tag-science",
        title: "مسابقة التحدّي العلمي",
        date: "2026-12-10",
        time: "11:00 ص - 3:00 م",
        location: "المختبر العلمي",
        description: "مسابقة حماسية سريعة تعتمد على اختبار الذكاء، سرعة البديهة، والمعارف العلمية التخصصية للفرق.",
        images: [
            "assets/img/science-challenge-1.jpg",
            "assets/img/science-challenge-2.jpg",
            "assets/img/science-challenge-3.jpg",
            "assets/img/science-challenge-4.jpg"
        ]
    },
    design: {
        tag: "إبداعي",
        tagClass: "tag-creative",
        title: "مسابقة التصميم الرقمي",
        date: "2026-12-15",
        time: "كل اليوم",
        location: "استوديو التصميم الرقمي",
        description: "تحدٍّ إبداعي موجه للمصممين الشباب لتقديم أفضل التصاميم البصرية، الشعارات، وأغلفة الكتب المبتكرة.",
        images: [
            "assets/img/design-1.jpg",
            "assets/img/design-2.jpg",
            "assets/img/design-3.jpg",
            "assets/img/design-4.jpg"
        ]
    },
    sports: {
        tag: "رياضي",
        tagClass: "tag-sports",
        title: "البطولة الرياضية الطلابية",
        date: "2026-12-20",
        time: "9:00 ص - 6:00 م",
        location: "الصالة الرياضية",
        description: "دوري رياضي جامعي يهدف إلى تعزيز الروح الرياضية عبر منافسات كرة القدم، السلة، والشطرنج.",
        images: [
            "assets/img/sports-1.jpg",
            "assets/img/sports-2.jpg",
            "assets/img/sports-3.jpg",
            "assets/img/sports-4.jpg"
        ]
    },
    volunteer: {
        tag: "اجتماعي",
        tagClass: "tag-social",
        title: "مبادرة طلابية للتطوع",
        date: "2026-12-25",
        time: "9:00 ص - 4:00 م",
        location: "ساحة المبادرات والأنشطة التطوعية",
        description: "حملة إنسانية وبيئية لتشجيع الطلاب على العمل التطوعي، تشجير المرافق، وخدمة المجتمع المحلي.",
        images: [
            "assets/img/volunteer-1.jpg",
            "assets/img/volunteer-2.jpg",
            "assets/img/volunteer-3.jpg",
            "assets/img/volunteer-4.jpg"
        ]
    }
};

// event locations
var LOCATIONS = {
    "reading": { name: "المكتبة الجامعية", img: "assets/img/location-reading.jpg" },
    "poetry": { name: "المدرج الجامعي", img: "assets/img/location-poetry.jpg" },
    "cyber": { name: "مخبر الحاسوب", img: "assets/img/location-cyber.jpg" },
    "hackathon": { name: "قاعة الهاكاثون والابتكار الرقمي", img: "assets/img/location-hackathon.jpg" },
    "projects": { name: "قاعة المعارض العلمية", img: "assets/img/location-projects.jpg" },
    "science-challenge": { name: "المختبر العلمي", img: "assets/img/location-science-challenge.jpg" },
    "design": { name: "استوديو التصميم الرقمي", img: "assets/img/location-design.jpg" },
    "sports": { name: "الصالة الرياضية", img: "assets/img/location-sports.jpg" },
    "volunteer": { name: "ساحة المبادرات والأنشطة التطوعية", img: "assets/img/location-volunteer.jpg" }
};

// shortcuts
function getEl(s) {
    return document.querySelector(s);
}

function getAllEl(s) {
    return document.querySelectorAll(s);
}

// localStorage wrappers (safe even if storage is blocked)
function lsGet(k) {
    try { return localStorage.getItem(k); } catch (e) { return null; }
}
function lsSet(k, v) {
    try { localStorage.setItem(k, v); } catch (e) { }
}
function lsRemove(k) {
    try { localStorage.removeItem(k); } catch (e) { }
}

var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// "2026-11-15" -> "15-11-2026" (same format used on every page)
function formatDate(iso) {
    var p = iso.split("-");
    return p[2] + "-" + p[1] + "-" + p[0];
}

// days from today until the event (negative = already finished)
function daysUntil(iso) {
    var p = iso.split("-");
    var d = new Date(+p[0], +p[1] - 1, +p[2], 0, 0, 0, 0);
    var t = new Date();
    t = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0);
    return Math.round((d - t) / 86400000);
}

// status badge text + Bootstrap colour: "today", "tomorrow", "this week", countdown
function statusInfo(iso) {
    var n = daysUntil(iso);
    if (n < 0) return { text: "انتهت الفعالية", cls: "bg-secondary" };
    if (n === 0) return { text: "الحدث اليوم", cls: "bg-danger" };
    if (n === 1) return { text: "غداً", cls: "bg-danger" };
    if (n <= 7) return { text: "هذا الأسبوع", cls: "bg-warning text-dark" };
    return { text: "بعد " + n + " يوم", cls: "bg-dark" };
}

function applyBadges() {
    getAllEl(".status-badge[data-date]").forEach(function (b) {
        var s = statusInfo(b.getAttribute("data-date"));
        b.className = "status-badge badge " + s.cls;
        b.textContent = s.text;
    });
}

// Bootstrap toast (replaces the native alert())
function showToast(msg, kind) {
    var wrap = getEl("#toast-wrap");
    if (!wrap) {
        wrap = document.createElement("div");
        wrap.id = "toast-wrap";
        wrap.className = "toast-container position-fixed top-0 start-50 translate-middle-x p-3";
        document.body.appendChild(wrap);
    }
    var t = document.createElement("div");
    t.className = "toast align-items-center text-bg-" + (kind || "success") + " border-0";
    t.setAttribute("role", "alert");
    t.innerHTML = '<div class="d-flex"><div class="toast-body"></div>' +
        '<button type="button" class="btn-close btn-close-white m-auto me-2" data-bs-dismiss="toast" aria-label="إغلاق"></button></div>';
    t.querySelector(".toast-body").textContent = msg;
    wrap.appendChild(t);
    t.addEventListener("hidden.bs.toast", function () { t.remove(); });
    new bootstrap.Toast(t, { delay: 3500 }).show();
}

// home: featured slider - the overlay text follows the active slide
function initFeaturedSlider() {
    var car = getEl("#featuredCarousel");
    if (!car) return;

    function update(item) {
        var id = item.getAttribute("data-event");
        var ev = EVENTS_DATA[id];
        if (!ev) return;
        getEl("#feat-tag").textContent = ev.tag;
        getEl("#feat-title").textContent = ev.title;
        getEl("#feat-meta").textContent = formatDate(ev.date) + " | " + ev.location;
        getEl("#feat-link").setAttribute("href", "event.html?id=" + id);
    }

    update(car.querySelector(".carousel-item.active"));
    car.addEventListener("slid.bs.carousel", function (e) {
        update(e.relatedTarget);
    });
}

// events page: search + category + location + date range filter
function initEventsFilter() {
    var search = getEl("#search-input");
    var cat = getEl("#category-filter");
    var loc = getEl("#location-filter");
    var from = getEl("#date-from");
    var to = getEl("#date-to");
    var reset = getEl("#reset-filters");
    var count = getEl("#results-count");
    var note = getEl("#filter-note");
    var noRes = getEl("#no-results");
    var cards = getAllEl(".event-card-col");

    if (!cards.length) return;

    function setSelect(sel, val) {
        if (!sel || !val) return false;
        var before = sel.value;
        sel.value = val;
        if (sel.value === val) return true;
        sel.value = before; // value is not an option: keep the default
        return false;
    }

    // category from the URL (?cat=tech) wins over the saved preference
    var urlCat = new URLSearchParams(window.location.search).get("cat");
    var savedCat = lsGet("svu-cat");
    if (urlCat && setSelect(cat, urlCat)) {
        // nothing else to do
    } else if (savedCat && savedCat !== "field" && setSelect(cat, savedCat)) {
        // tell the visitor why the list is already filtered
        if (note) note.classList.remove("d-none");
    }

    function filter() {
        var s = search.value.trim().toLowerCase();
        var c = cat.value;
        var l = loc.value;
        var f = from.value;
        var t = to.value;
        var n = 0;

        cards.forEach(function (col) {
            var card = col.querySelector(".event-mini-card");
            var d = card.getAttribute("data-date"); // ISO date, easy to compare
            var show = true;

            if (s && card.textContent.toLowerCase().indexOf(s) === -1) show = false;
            if (c !== "field" && c !== "all" && card.getAttribute("data-category") !== c) show = false;
            if (l !== "location" && l !== "all" && card.getAttribute("data-location") !== l) show = false;
            if (f && d < f) show = false;
            if (t && d > t) show = false;

            col.style.display = show ? "" : "none";
            if (show) n++;
        });

        if (count) count.textContent = "عدد الفعاليات المعروضة: " + n + " من " + cards.length;
        if (noRes) noRes.style.display = (n === 0) ? "block" : "none";
    }

    cat.addEventListener("change", function () {
        lsSet("svu-cat", cat.value); // remember the category preference
        if (note) note.classList.add("d-none");
        filter();
    });
    search.addEventListener("input", filter);
    loc.addEventListener("change", filter);
    from.addEventListener("change", filter);
    to.addEventListener("change", filter);

    if (reset) {
        reset.addEventListener("click", function () {
            search.value = "";
            cat.value = "field";
            loc.value = "location";
            from.value = "";
            to.value = "";
            lsRemove("svu-cat");
            if (note) note.classList.add("d-none");
            if (window.history && history.replaceState) history.replaceState(null, "", "events.html");
            filter();
        });
    }

    filter();
}

// id from the URL; no id at all = default event, wrong id = not found
function getEventId() {
    return new URLSearchParams(window.location.search).get("id") || "cyber";
}

// event details page
function initEventDetails() {
    var box = getEl(".event-header-card");
    if (!box) return;

    var id = getEventId();
    var ev = EVENTS_DATA[id];

    // unknown id: show a clear message instead of a wrong event
    if (!ev) {
        box.innerHTML = '<div class="alert alert-warning" role="alert">' +
            '<i class="bi bi-exclamation-triangle"></i> عذراً، هذه الفعالية غير موجودة.</div>' +
            '<a href="events.html" class="btn btn-theme">العودة إلى كل الفعاليات</a>';
        document.title = "فعالية غير موجودة - دليل فعاليات الجامعة";
        return;
    }

    var tag = box.querySelector(".card-tag");
    if (tag) {
        tag.textContent = ev.tag;
        tag.className = "card-tag " + ev.tagClass;
    }

    var title = box.querySelector("h1");
    if (title) title.textContent = ev.title;

    var st = statusInfo(ev.date);
    var info = box.querySelector(".event-info");
    if (info) {
        info.innerHTML =
            '<span><i class="bi bi-calendar"></i> التاريخ: ' + formatDate(ev.date) + '</span>' +
            '<span><i class="bi bi-clock"></i> الوقت: ' + ev.time + '</span>' +
            '<span><i class="bi bi-geo-alt"></i> المكان: ' + ev.location + '</span>' +
            '<span class="badge ' + st.cls + '">' + st.text + '</span>';
    }

    var desc = box.querySelector(".event-description p");
    if (desc) desc.textContent = ev.description;

    var gal = box.querySelector(".event-gallery");
    if (gal) {
        var html = "";
        ev.images.forEach(function (img, i) {
            html += '<img src="' + img + '" alt="' + ev.title + ' - صورة ' + (i + 1) + '" loading="lazy">';
        });
        gal.innerHTML = html;
    }

    // location box
    var side = getEl(".event-sidebar-card");
    if (side) {
        var map = side.querySelector(".map");
        var addr = side.querySelector(".location-address");
        var place = LOCATIONS[id];
        if (place) {
            if (map) map.innerHTML = '<img src="' + place.img + '" alt="' + place.name + '">';
            if (addr) addr.innerHTML = "<strong>الموقع:</strong> " + place.name;
        }
    }

    // related events: same category first, then others (never the current one)
    var rel = getEl(".related-cards-grid");
    if (rel) {
        var others = Object.keys(EVENTS_DATA).filter(function (k) { return k !== id; });
        others.sort(function (a, b) {
            return (EVENTS_DATA[b].tag === ev.tag) - (EVENTS_DATA[a].tag === ev.tag);
        });
        var rhtml = "";
        others.slice(0, 2).forEach(function (k) {
            var r = EVENTS_DATA[k];
            rhtml += '<div class="related-card-item"><h3>' + r.title + '</h3>' +
                '<p>التاريخ: ' + formatDate(r.date) + '</p>' +
                '<a href="event.html?id=' + k + '" class="related-card-link">التفاصيل &larr;</a></div>';
        });
        rel.innerHTML = rhtml;
    }

    document.title = ev.title + " - دليل فعاليات الجامعة";
}

// convert "10:00 ص" / "2:00 م" to 24h [h, m]
function parseArTime(t) {
    if (!t || typeof t !== "string") return null;
    var m = t.match(/(\d{1,2}):(\d{2})\s*(ص|م)/);
    if (!m) return null;
    var h = parseInt(m[1], 10) % 12;
    if (m[3] === "م") h += 12;
    return [h, parseInt(m[2], 10)];
}

// share and calendar buttons
function initActionButtons() {
    var cal = getEl(".btn-calender");
    var share = getEl(".btn-share");

    if (share) {
        share.addEventListener("click", function (e) {
            e.preventDefault();
            if (navigator.share) {
                navigator.share({ title: document.title, url: window.location.href });
            } else if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href).then(function () {
                    showToast("تم نسخ رابط الفعالية", "success");
                });
            }
        });
    }

    if (cal) {
        cal.addEventListener("click", function (e) {
            e.preventDefault();
            // build a real .ics calendar file for the current event
            var id = getEventId();
            var ev = EVENTS_DATA[id];
            if (!ev) return;
            var pad = function (n) { return (n < 10 ? "0" : "") + n; };
            var day = ev.date.replace(/-/g, "");
            var parts = ev.time.split("-");
            var s = parseArTime(parts[0] || "");
            var en = parseArTime(parts[1] || "");
            var start, end;
            if (s && en) {
                start = "DTSTART:" + day + "T" + pad(s[0]) + pad(s[1]) + "00";
                end = "DTEND:" + day + "T" + pad(en[0]) + pad(en[1]) + "00";
            } else {
                var d = new Date(ev.date + "T00:00:00");
                d.setDate(d.getDate() + 1);
                var next = d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate());
                start = "DTSTART;VALUE=DATE:" + day;
                end = "DTEND;VALUE=DATE:" + next;
            }
            var ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//SVU Events//AR",
                "BEGIN:VEVENT", "UID:" + id + "@svu-events", start, end,
                "SUMMARY:" + ev.title, "LOCATION:" + ev.location,
                "DESCRIPTION:" + ev.description, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
            var a = document.createElement("a");
            a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
            a.download = id + ".ics";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            showToast("تم تنزيل ملف التقويم", "success");
        });
    }
}

// booking form inside the Bootstrap modal (errors shown with a Bootstrap alert)
function initBookingForm() {
    var form = getEl("#booking-form");
    if (!form) return;

    var errBox = getEl("#booking-error");
    var modalEl = getEl("#bookingModal");

    // clear old errors whenever the modal is closed
    modalEl.addEventListener("hidden.bs.modal", function () {
        errBox.classList.add("d-none");
        form.reset();
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var name = getEl("#book-name").value.trim();
        var email = getEl("#book-email").value.trim();
        var seats = getEl("#book-seats").value;
        var alertBox = getEl("#booking-alert");
        var ev = EVENTS_DATA[getEventId()];

        var error = "";
        if (name.length < 3) error = "الاسم قصير جداً (3 أحرف على الأقل)";
        else if (!EMAIL_RE.test(email)) error = "البريد الإلكتروني غير صحيح";

        if (error) {
            errBox.textContent = error;
            errBox.classList.remove("d-none");
            return;
        }

        bootstrap.Modal.getInstance(modalEl).hide();

        // success message on the page (secure DOM manipulation)
        if (alertBox) {
            alertBox.innerHTML = "";
            var icon = document.createElement("i");
            icon.className = "bi bi-check-circle me-1";
            alertBox.appendChild(icon);
            var msgText = " تم تأكيد حجز " + seats + " مقعد باسم " + name + (ev ? " في «" + ev.title + "»" : "") + ".";
            alertBox.appendChild(document.createTextNode(msgText));
            alertBox.style.display = "block";
            setTimeout(function () {
                alertBox.style.display = "none";
            }, 6000);
        }
    });
}

// contact form: front-end validation + Bootstrap alert and field feedback
function initContactForm() {
    var form = getEl("#contact-form");
    if (!form) return;

    var box = getEl("#form-alert");
    var timer = null;

    // one rule per required field
    var rules = [
        { id: "#c-name", ok: function (v) { return v.length >= 3; }, msg: "الاسم قصير جداً (3 أحرف على الأقل)" },
        { id: "#c-email", ok: function (v) { return EMAIL_RE.test(v); }, msg: "صيغة البريد الإلكتروني غير صحيحة" },
        { id: "#c-message", ok: function (v) { return v.length >= 10; }, msg: "الرسالة قصيرة جداً (10 أحرف على الأقل)" }
    ];

    function showAlert(text, cls) {
        clearTimeout(timer);
        box.className = "alert " + cls;
        box.textContent = text;
        if (cls === "alert-success") {
            timer = setTimeout(function () { box.className = "alert d-none"; }, 6000);
        }
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var valid = true;

        rules.forEach(function (r) {
            var input = getEl(r.id);
            var good = r.ok(input.value.trim());
            input.classList.toggle("is-invalid", !good);
            input.classList.toggle("is-valid", good);
            input.parentNode.querySelector(".invalid-feedback").textContent = r.msg;
            if (!good) valid = false;
        });

        if (!valid) {
            showAlert("يرجى تصحيح الحقول المحددة ثم إعادة الإرسال.", "alert-danger");
            return;
        }

        // reset first (it clears old messages), then show the success alert
        form.reset();
        showAlert("تم استلام رسالتك بنجاح! سنرد عليك قريباً.", "alert-success");
    });

    // reset button also clears the messages
    form.addEventListener("reset", function () {
        box.className = "alert d-none";
        form.querySelectorAll(".is-valid, .is-invalid").forEach(function (i) {
            i.classList.remove("is-valid", "is-invalid");
        });
    });
}

// dark mode
function initDarkMode() {
    var btn = getEl("#theme-toggle");
    if (!btn) return;

    // check saved theme
    if (lsGet("svu-theme") === "dark") {
        document.body.classList.add("dark-mode");
        btn.textContent = "☀";
    }

    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        var dark = document.body.classList.contains("dark-mode");
        lsSet("svu-theme", dark ? "dark" : "light");
        btn.textContent = dark ? "☀" : "☾";
    });
}

// scroll to top
function initScrollTop() {
    var btn = getEl("#scroll-top");
    if (!btn) return;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    });

    btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// run based on page
document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page");

    if (page === "home") {
        initFeaturedSlider();
        applyBadges();
    } else if (page === "events") {
        initEventsFilter();
        applyBadges();
    } else if (page === "event") {
        initEventDetails();
        initActionButtons();
        initBookingForm();
    } else if (page === "contact") {
        initContactForm();
    }

    initDarkMode();
    initScrollTop();
});
