<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Users table</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
  <link href="Styles/styles.scss" rel="stylesheet">

  <div class="container">
    <div class="row flex-lg-nowrap">
      <div class="col">
        <div class="row flex-lg-nowrap">
          <div class="col mb-3">
            <div class="e-panel card">
              <div class="card-body">
                <div class="card-title">
                  <h6 class="mr-2"><span>Users</span></h6>
                </div>
                <?php include 'Actions/actions_block.html'; ?>
                <div class="e-table">
                  <div class="table-responsive table-lg mt-3">
                    <table class="table table-bordered">
                      <thead>
                        <?php include_once 'InitTable/thead.html' ?>
                      </thead>
                      <tbody id = "table-body">
                      <?php include 'users.php'; ?>
                      </tbody>
                    </table>
                  </div>
                </div>
                <?php include 'Actions/actions_block.html'; ?>
              </div>
            </div>
          </div>
        </div>
        <!-- User Form Modal -->
        <?php include 'Modals/user_form_modal.php' ?>
        <?php include 'Modals/confirm_delete_modal.php' ?>
        <?php include 'Modals/actions_block_waring_modal.php' ?>
        <?php include 'Modals/actions_block_error_modal.php' ?>


      </div>
    </div>
  </div>
  <script src = "Actions/actions_block.js"></script>
  <script src = "Actions/check_box_actions.js"></script>
  <script src = "Save/save_user.js"></script>
  <script src = "Delete/delete_user.js"></script>
  <script src = "Edit/edit_user.js"></script>
  <script src = "Add/add_user.js"></script>
</body>
</html>