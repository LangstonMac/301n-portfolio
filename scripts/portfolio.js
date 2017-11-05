//declaring projects array
var projects = [];

//Object Constructor to be filled with project data
function Project(projectDataObj) {
  this.title = projectDataObj.title;
  this.finalizedOn = projectDataObj.finalizedOn;
  this.body = projectDataObj.body;
  this.projectUrl = projectDataObj.projectUrl;
}

Project.prototype.toHtml = function () {
  //changing the class of the project from template and finding its parts
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find("h1").text(this.title);
  $newProject.find(".byline a").attr("href", this.projectUrl);
  $newProject.find(".article-body").html(this.body);
  $newProject.find(".byline time").text(this.finalizedOn);

  //appending it to the html
  $newProject.append("<hr>")
}

projectData.forEach(function(projectObject){
  projects.push(new Project(projectObject))
});

projects.forEach(function(project){
  $('articles').append(project.toHtml());
});
