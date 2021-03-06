const linksSocialMedia = {
  github: 'brunotomazz',
  youtube: 'channel/UCvd0dd_79TNVRs1PbSh3xcA',
  facebook: 'brunobtds',
  instagram: 'brunotmaz',
  twitter: 'brunotmaz'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Jonas'
  //userName.textContent = 'Luiz'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => { 
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login

     })
}

getGitHubProfilesInfos()

//Arrow functions
