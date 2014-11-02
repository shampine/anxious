var config = {
  "mailgun": {
    "domain": 'insert_domain',
    "api"   : 'insert_api_key',
    "from"  : 'insert_email_from',
    "to"    : 'insert_email_to'
  },
  "sites": [
    {
      "url": "insert_url_to_test",
      "submit": "insert_submit_id",
      "fields": [
        {"id": "insert_input_id", "text": "insert_input_text"},
        {"id": "insert_input_id", "text": "insert_input_text"},
        {"id": "insert_input_id", "text": "insert_input_text"}
      ],
    },
    {
      "url": "insert_url_to_test",
      "submit": "insert_submit_id",
      "fields": [
        {"id": "insert_input_id", "text": "insert_input_text"},
        {"id": "insert_input_id", "text": "insert_input_text"},
        {"id": "insert_input_id", "text": "insert_input_text"}
      ],
    }
  ]
};

module.exports = config;