import qrcode

# Your website URL
url = "https://primo-systems.com"

# Create QR code
qr = qrcode.make(url)

# Save it
qr.save("../../assets/my_website_qr.png")
