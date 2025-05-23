 // Toggle Between Tablets , iPads, And Laptops Sections
 const tabletsBtn = document.getElementById('tabletsBtn');
 const iPadsBtn = document.getElementById('iPadsBtn');
 const laptopsBtn = document.getElementById('laptopsBtn');
 
 const tabletsSection = document.getElementById('tabletsSection');
 const iPadsSection = document.getElementById('iPadsSection');
 const laptopsSection = document.getElementById('laptopsSection');

 function RemoveActiveFromAllbuttons()
 {
     tabletsBtn.classList.remove('active');
     iPadsBtn.classList.remove('active');
     laptopsBtn.classList.remove('active');
 }

 function HideAllSections()
 {
     document.getElementById('tabletsSection').classList.remove('active');
     document.getElementById('iPadsSection').classList.remove('active');
     document.getElementById('laptopsSection').classList.remove('active');
 }

tabletsBtn.addEventListener('click', () => 
{
 RemoveActiveFromAllbuttons();
 HideAllSections();
 tabletsBtn.classList.add('active');
 tabletsSection.classList.add('active');
});

iPadsBtn.addEventListener('click', () => 
{
 RemoveActiveFromAllbuttons();
 HideAllSections();
 iPadsBtn.classList.add('active');
 iPadsSection.classList.add('active');
});

laptopsBtn.addEventListener('click', () =>
{
RemoveActiveFromAllbuttons();
HideAllSections();
laptopsBtn.classList.add('active');
laptopsSection.classList.add('active');
});