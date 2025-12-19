const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to another service if needed
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOrderReceipt = async (order, customerEmail) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: customerEmail,
      subject: `Order Confirmation-SMARTMEDI`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50;">Thank you for your order!</h2>
          <p>Hi ${order.customer.name},</p>
          <p>Your order has been placed successfully.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Order ID:</strong> ${order._id}</p>
            <p><strong>Total Amount:</strong> ₹${order.total.toFixed(2)}</p>
            <p><strong>Payment Method:</strong> ${order.paymentMethod.toUpperCase()}</p>
          </div>

          <h3>Order Items:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #eee;">
                <th style="padding: 10px; text-align: left;">Item</th>
                <th style="padding: 10px; text-align: right;">Qty</th>
                <th style="padding: 10px; text-align: right;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${order.items.map(item => `
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 10px;">${item.name}</td>
                  <td style="padding: 10px; text-align: right;">${item.quantity}</td>
                  <td style="padding: 10px; text-align: right;">₹${item.price}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          
          <div style="margin-top: 20px; text-align: right;">
            <p><strong>Subtotal:</strong> ₹${order.subtotal.toFixed(2)}</p>
            <p><strong>Tax:</strong> ₹${order.tax.toFixed(2)}</p>
            <p><strong>Delivery Fee:</strong> ₹${order.deliveryFee.toFixed(2)}</p>
            <h3 style="color: #2c3e50;">Total: ₹${order.total.toFixed(2)}</h3>
          </div>

          <p style="margin-top: 30px; font-size: 12px; color: #7f8c8d;">
            If you have any questions, please contact our support team.
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw error to avoid failing the order creation if email fails
    return null;
  }
};

// Send Test Booking Confirmation Email
const sendTestBookingReceipt = async (booking) => {
  if (!booking.email) return;

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: booking.email,
    subject: `Booking Confirmed - ID: ${booking._id}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Test Booking Confirmation</h2>
        <p>Dear ${booking.patientName},</p>
        <p>Your appointment has been successfully booked!</p>
        
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Booking ID:</strong> ${booking._id}</p>
          <p><strong>Lab Name:</strong> ${booking.labName}</p>
          <p><strong>Date:</strong> ${new Date(booking.preferredDate).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${booking.timeSlot}</p>
          <p><strong>Location:</strong> ${booking.address}</p>
        </div>

        <h3>Tests Scheduled:</h3>
        <ul>
          ${booking.tests
            .map(
              (test) => `
            <li>
              <strong>${test.name}</strong> - ₹${test.price}
            </li>
          `
            )
            .join("")}
        </ul>
        
        <p style="font-size: 1.2em; font-weight: bold; margin-top: 20px;">
          Total Amount: ₹${booking.tests.reduce((sum, item) => sum + item.price, 0)}
        </p>

        <p style="color: #666; font-size: 0.9em; margin-top: 30px;">
          If you have any questions, please contact the lab directly.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Test Booking Receipt sent to:", booking.email);
  } catch (error) {
    console.error("❌ Error sending booking receipt:", error);
  }
};

module.exports = { sendOrderReceipt, sendTestBookingReceipt };
