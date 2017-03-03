var template = $('#forloop').html();

var templatescript = handlebars.compile(template);

var work = req.session.user.work;

var html = templatescript(work);

$(studenthome.body).append(html);
