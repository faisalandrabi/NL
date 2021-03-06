
const fetchUsers = async() =>
     await(await fetch('/.netlify/functions/getusers')).json();
     //await(await fetch('http://localhost:9000/getUsers')).json();
     let i=1;
fetchUsers().then((result) => {
    userTable=document.querySelector('#usertable');
    result.forEach(user => {
        const th=document.createElement('th');
        th.setAttribute('scope','row');
        th.append(i);
        const rowitem=document.createElement('tr');
        
        const col1=document.createElement('td');
        col1.append(user.login);

        const col2=document.createElement('td');
        const uimg=document.createElement('img');
        uimg.setAttribute('src',user.avatar_url);
        uimg.setAttribute('height','50px');
        uimg.setAttribute('width','50px');
        col2.append(uimg);

        
        const link=document.createElement('a');
        const linkText=document.createTextNode('Profile Link');
        link.appendChild(linkText);
        link.setAttribute('title',user.html_url);
        link.setAttribute('href',user.html_url);
        const col3=document.createElement('td');
        col3.append(link);
        
        rowitem.append(th);
        rowitem.append(col1);
        rowitem.append(col2);
        rowitem.append(col3);
        userTable.append(rowitem);
        i=i+1;
    });
});