/*		<form name="contactform" action="submit.html" onsubmit="return validateForm()" method="POST">
			<div class="center">
				<div class="center1">
			<div class="form-group">
				<label class="required" for="Name">Name:</label>
				<input type="text" class="form-control" placeholder="Please enter your first and last name" id="Name" name="Name"><br/>
				<br/>
			</div>
				
			<div class="form-group">
				<label class="required" for="Email">Email:</label>
				<input type="email" class="form-control" placeholder="Enter email" id="Email" name="Email"><br/>
				<br/>
			</div>
			<div class="form-group">
				<label class="required" for="phone">Phone:</label>
				<input type="text" class="form-control" placeholder="Please enter you phone number" id="phone" name="phone"><br/>
				<br/>
			</div>
				<label class="required" for="inquiry">Reason for Inquiry:</label>
				<select id="inquiry" name="inquiry">
					<option value="catering" selected>Catering</option>
					<option value="private-party">Private Party</option>
					<option value="feedback">Feedback</option>
					<option value="other">Other</option>
				</select>
				<br/><br/>
				
				<label for="info">Additional Information (Optional)</label><br />
				<textarea id="info" name="info"></textarea>
				
				<div class="form-check form-check-inline">
					<legend>Have you been to the restaurant?</legend>
					
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio" id="no" name="question" value="no" checked>
						<label class="form-check-label" for="no">No</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio" id="yes" name="question" value="yes">
						<label  class="form-check-label"for="yes">Yes</label><br />
					</div>
				</div>
				<div class="form-check form-check-inline">
					<legend>Best days to contact you:</legend>
					
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="monday" name="weekday" value="monday">
						<label class="form-check-label" for="monday">M</label>
					</div>	
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="tuesday" name="weekday" value="tuesday">
						<label class="form-check-label" for="monday">T</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="wednesday" name="weekday" value="wednesday">
						<label class="form-check-label" for="monday">W</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="thursday" name="weekday" value="thursday">
						<label class="form-check-label" for="monday">Th</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="friday" name="weekday" value="friday">
						<label class="form-check-label" for="monday">F</label>
					</div>
				</div>
						<br/>
							
				
				
				<input type="submit" name="send-request" value="Send Request">
				</div>
			</div>
		</form>*/
function validateForm(){
	var name=document.getElementById("Name").value;
	var email=document.getElementById("Email").value;
	var phone=document.getElementById("phone").value;
	
	if (name.length==0||email.length==0||phone.length==0){
		return alert ("Please fill in required fields");
	} else {
		return alert ("Info is valid");
	}
}