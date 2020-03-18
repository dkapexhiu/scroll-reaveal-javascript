<?php include 'header.php'; ?>

<div class="content-wrap" id="content-wrap">
        <div class="content" id="content" data-pagename="ICARCH — Contact">
    <section class="sandstone-bg black-text">
        <div class="wrap text-wrap align-center">
            <h2>Contact</h2>
        </div>

        <div class="wrap text-wrap flush-top body-copy">
            <form id="ok-form" class="contact-form" action="https://formspree.io/xwkordwp" method="POST">
                <div class="half">
                    <div class="input-wrap">
                        <input type="text" name="name" id="name" autocomplete="name" required aria-required="true" aria-invalid="false" />
                        <label for="name">Name *</label>
                    </div>
                    <div class="input-wrap">
                        <input type="email" name="email" id="email" autocomplete="email" required aria-required="true" aria-invalid="false" />
                        <label for="name">Email *</label>
                    </div>
                    <div class="input-wrap">
                        <input type="tel" name="phone" id="phone" autocomplete="tel" aria-invalid="false" />
                        <label for="phone">Phone</label>
                    </div>
                </div>

                <div class="half">
                    <div class="input-wrap" id="select-wrap">
                        <select name="subject" id="form-subject">
                            <option disabled="" selected="" value="">Select Subject *</option>
                            <option val="New Business Inquiries" >New Business Inquiries</option>
                            <option val="Press Inquiries " >Press Inquiries</option>
                            <option val="Students — Research" >Students — Research</option>
                        </select>
                    </div>
                    <div class="input-wrap" id="message-wrap">
                        <textarea name="message" id="message" required></textarea>
                        <label for="message">Message *</label>
                    </div>
                        <input class="button" type="submit" value="Send" id="send-form" />
                    </div>

                    <div class="input-wrap" id="form-response"></div>
                </div>
            </form>
        </div>
    </section>

		
			
		</div><!-- #content -->
	</div><!-- #content-wrap -->

<?php include 'footer.php'; ?>