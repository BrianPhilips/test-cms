import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const TestPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  function addSnippet() {
    return {
      __html: `
      <!-- Note :
   - You can modify the font style and form style to suit your website. 
   - Code lines with comments ���Do not remove this code���  are required for the form to work properly, make sure that you do not remove these lines of code. 
   - The Mandatory check script can modified as to suit your business needs. 
   - It is important that you test the modified form before going live.-->
<div id='crmWebToEntityForm' style='width:300px;margin:auto;'>
   <META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'>
   <form action='https://crm.zoho.eu/crm/WebToLeadForm' name=WebToLeads140850000000268041 method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory140850000000268041()' accept-charset='UTF-8'>

	 <!-- Do not remove this code. -->
	<input type='text' style='display:none;' name='xnQsjsdp' value='dbb598ef64d03c34fa5eae2552d4ad0d6b5c234e181f05e1921e4fb348067725'/>
	<input type='hidden' name='zc_gad' id='zc_gad' value=''/>
	<input type='text' style='display:none;' name='xmIwtLD' value='8aa8710041a8fc51f4e11c200712d85022e1195ad169d7f0e1b134d87a8eb3cb'/>
	<input type='text' style='display:none;'  name='actionType' value='TGVhZHM='/>

	<input type='text' style='display:none;' name='returnURL' value='https&#x3a;&#x2f;&#x2f;www.amazix.com&#x2f;' /> 
	 <!-- Do not remove this code. -->
	<input type='text' style='display:none;' id='ldeskuid' name='ldeskuid'></input>
	<input type='text' style='display:none;' id='LDTuvid' name='LDTuvid'></input>
	 <!-- Do not remove this code. -->
	<style>
		tr , td { 
			padding:6px;
			border-spacing:0px;
			border-width:0px;
			}
	</style>
	<table style='width:300px;background-color:white;color:black'>

	<tr><td colspan='2' style='text-align:left;color:black;font-family:Arial;font-size:14px;'><strong>Amazix Contact Form</strong></td></tr>

	<tr><td><span style='nowrap:nowrap;font-size:12px;font-family:Arial;width:200px;line-height: 22px;'>Name<span style='color:red;'>*</span></span><br><input type='text' maxlength='80' style='width:250px;' name='Last Name'></input></td></tr>

	<tr><td><span style='nowrap:nowrap;font-size:12px;font-family:Arial;width:200px;line-height: 22px;'>Telegram ID<span style='color:red;'>*</span></span><br><input type='text' maxlength='255' style='width:250px;' name='LEADCF1'></input></td></tr>

	<tr><td><span style='nowrap:nowrap;font-size:12px;font-family:Arial;width:200px;line-height: 22px;'>E-mail Address<span style='color:red;'>*</span></span><br><input type='text' maxlength='100' style='width:250px;' name='Email'></input></td></tr>

	<tr><td><span style='nowrap:nowrap;font-size:12px;font-family:Arial;width:200px;line-height: 22px;'>Business Name<span style='color:red;'>*</span></span><br><input type='text' maxlength='100' style='width:250px;' name='Company'></input></td></tr>

	<tr><tr style='display:none;' ><td style='nowrap:nowrap;text-align:top;font-size:12px;font-family:Arial;width:50%'>Lead Status</td><td style='width:250px;'>
		<select style='width:250px;' name='Lead Status'>
			<option value='-None-'>-None-</option>
			<option value='Unassigned'>Unassigned</option>
		<option selected value='Not&#x20;Contacted'>Not Contacted</option>
			<option value='Attempted&#x20;to&#x20;Contact'>Attempted to Contact</option>
			<option value='Contact&#x20;in&#x20;Future'>Contact in Future</option>
			<option value='Interested'>Interested</option>
			<option value='Junk&#x20;Lead'>Junk Lead</option>
			<option value='Lost&#x20;Lead'>Lost Lead</option>
			<option value='Not&#x20;Qualified'>Not Qualified</option>
		</select></td></tr>

	<tr><td colspan='2'><div class='dIB vat mT2' align='left' style='color: rgb(0, 0, 0); font-size: 12px; font-family:Arial;display: inline-block; vertical-align: top;margin-top:5px'><div class='displayPurpose  f13'><label class='newCustomchkbox-md dIB w100per'><input autocomplete='off' onclick='disableSubmit()' id='privacyTool' type='checkbox' name='privacyTool'><span class='chkbxIcon'></span></label></div></div><div class='fw200 dIB vat mL5' style='nowrap:nowrap;text-align:top;font-size:12px;font-family:Arial;width:300px;width:90%;display: inline-block;margin-top: 5px; color:black'>I accept that:<br><font color='#293345' face='Source Sans Pro, sans-serif'><span style='font-size: 22px;'><br></span></font>AmaZix Ltd will receive your email address, name and Telegram: All data you are giving to us automatically generates a record which will be received by a qualified AmaZix team member on his Zoho CRM Account.<br><font color='#293345' face='Source Sans Pro, sans-serif'><span style='font-size: 22px;'><br></span></font>Zoho ensures the protection of your data in compliance with GDPR:https://www.zoho.eu/gdpr.html<br><font color='#293345' face='Source Sans Pro, sans-serif'><span style='font-size: 22px;'><br></span></font>We will use your data to analyze your request and to get in touch with you as soon as we can. Without your consent we can’t process your request.<br><font color='#293345' face='Source Sans Pro, sans-serif'><span style='font-size: 22px;'><br></span></font>We will treat your data in respect of international laws for data Protection and Privacy (eg. GDPR) and therefore:<br>We won’t use your email address for a different purpose<br><font color='#293345' face='Source Sans Pro, sans-serif'><span style='font-size: 22px;'><br></span></font>We won’t sell or give your email address to third parties<br><font color='#293345' face='Source Sans Pro, sans-serif'><span style='font-size: 22px;'><br></span></font>We will respect your data rights, so you can ask to update or/and delete you email address from our mailing list simply by writing to contact@amazix.com<br><font color='#293345' face='Source Sans Pro, sans-serif'><span style='font-size: 22px;'><br></span></font>In case of Data Breach, Zoho will inform us and you as soon as possible<br>For any question concerning your data rights, please write to: GDPR@amazix.com*</div></td></tr>

	<tr><td colspan='2' style='text-align:left; padding-top:15px;font-size:12px;'>
		<input style='opacity:0.5;font-size:12px;color:black' disabled id='formsubmit' type='submit' value='Submit' />
		<input onclick='disableSubmitwhileReset()' type='reset' style='font-size:12px;color:black' value='Reset' />
	    </td>
	</tr>
   </table>
	<script>
 	  var mndFileds=new Array('Company','Last Name','LEADCF1','Email');
 	  var fldLangVal=new Array('Business Name','Name','Telegram ID','E-mail Address');
		var name='';
		var email=''; 
  
function disableSubmitwhileReset()
	{		
	var submitbutton = document.getElementById('formsubmit');
	if(document.getElementById('privacyTool')!=undefined || document.getElementById('consentTool')!=undefined)
	{
		submitbutton.setAttribute('disabled', true);
	submitbutton.setAttribute('style','opacity:0.5;');
 }
	else
	{
		submitbutton.removeAttribute('disabled');
	}
} 
function disableSubmit()
	{		
	var isprivacyToolAvail = false;
	var isconsentToolAvail = false;
	var bothtoolAvail = false;
	var privacytool='';
	var consenttool='';
	var submitbutton = document.getElementById('formsubmit');
	if(document.getElementById('privacyTool')!=undefined && document.getElementById('consentTool')!=undefined)
	{
			isprivacyToolAvail=true;
			privacytool = document.getElementById('privacyTool');
			isconsentToolAvail=true;
			consenttool=document.getElementById('consentTool');
			bothtoolAvail=true;
	}

	if(document.getElementById('privacyTool')!=undefined)
	{
			isprivacyToolAvail=true;
			privacytool = document.getElementById('privacyTool');
	}
	if(document.getElementById('consentTool')!=undefined)
	{
			isconsentToolAvail=true;
			consenttool=document.getElementById('consentTool');
	}
	if(submitbutton.hasAttribute('disabled') && bothtoolAvail && consenttool.checked && privacytool.checked)
	{
			submitbutton.removeAttribute('disabled');
	submitbutton.removeAttribute('style','opacity: none;');}
	else if(submitbutton.hasAttribute('disabled') && isprivacyToolAvail && privacytool.checked && consenttool=='')
	{
			submitbutton.removeAttribute('disabled');
	submitbutton.removeAttribute('style','opacity: none;');}
	else if(submitbutton.hasAttribute('disabled') && isconsentToolAvail && consenttool.checked && privacytool=='')
	{
			submitbutton.removeAttribute('disabled');
submitbutton.removeAttribute('style','opacity: none;');
	}
	else
	{
			submitbutton.setAttribute('disabled', true);
	submitbutton.setAttribute('style','opacity: 0.5;');}
}

 	  function checkMandatory140850000000268041() {
		for(i=0;i<mndFileds.length;i++) {
		  var fieldObj=document.forms['WebToLeads140850000000268041'][mndFileds[i]];
		  if(fieldObj) {
			if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
			 if(fieldObj.type =='file')
				{ 
				 alert('Please select a file to upload.'); 
				 fieldObj.focus(); 
				 return false;
				} 
			alert(fldLangVal[i] +' cannot be empty.'); 
   	   	  	  fieldObj.focus();
   	   	  	  return false;
			}  else if(fieldObj.nodeName=='SELECT') {
  	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
				alert(fldLangVal[i] +' cannot be none.'); 
				fieldObj.focus();
				return false;
			   }
			} else if(fieldObj.type =='checkbox'){
 	 	 	 if(fieldObj.checked == false){
				alert('Please accept  '+fldLangVal[i]);
				fieldObj.focus();
				return false;
			   } 
			 } 
			 try {
			     if(fieldObj.name == 'Last Name') {
				name = fieldObj.value;
 	 	 	    }
			} catch (e) {}
		    }
		}
		trackVisitor();
	}
</script><script type='text/javascript' id='VisitorTracking'>var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'a68c6423f4e9739346a7c8223f6742a70c5094c6fb59990df5a55a5bfb959a75843a47d0a5755c58ccb28a9e25ca9966', values:{},ready:function(){$zoho.salesiq.floatbutton.visible('hide');}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.eu/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);function trackVisitor(){try{if($zoho){var LDTuvidObj = document.forms['WebToLeads140850000000268041']['LDTuvid'];if(LDTuvidObj){LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();}var firstnameObj = document.forms['WebToLeads140850000000268041']['First Name'];if(firstnameObj){name = firstnameObj.value +' '+name;}$zoho.salesiq.visitor.name(name);var emailObj = document.forms['WebToLeads140850000000268041']['Email'];if(emailObj){email = emailObj.value;$zoho.salesiq.visitor.email(email);}}} catch(e){}}</script>
	</form>
</div>

      `
    }
  }

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={addSnippet()} />
    </section>
  )
}

TestPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TestPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <TestPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

TestPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TestPage

export const testPageQuery = graphql`
  query TestPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
