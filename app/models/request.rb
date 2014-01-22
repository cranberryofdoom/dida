class Request < ParseResource::Base
  fields :firstName, :lastName, :orgName, :cellNumber, :dueDate, :eMail, :fundCode, :orgDescription, :printMedium, :projectDetails, :projectDirection, :projectFiles, :requestType
  validates_presence_of :firstName, :lastName, :cellNumber, :dueDate, :eMail, :orgDescription, :projectDetails, :projectDirection, :requestType
end