class RequestMailer < ActionMailer::Base
  default from: "dida.manager@gmail.com"

  def request_email(request)
  	@request = request
  	 mail(to: [request.eMail, "dida.manager@gmail.com"], template_path: 'request_mailer', template_name: 'request_email.html.erb', subject: 'New Project Request')
  end
end
