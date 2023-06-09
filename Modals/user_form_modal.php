<div class="modal fade" id="user-form-modal" tabindex="-1" aria-labelledby="user-form-modal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="UserModalLabel">Add user</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
                <input id="modal-id" type="hidden" data-id="">
            </div>
            <div class="form-group">
                <input id="user-form-modal-action" type="hidden" data-action="">
            </div>
            <div class="form-group">
              <label for="first-name" class="col-form-label">First Name:</label>
              <input type="text" class="form-control" id="first-name">
            </div>
            <div class="form-group">
              <label for="last-name" class="col-form-label">Last Name:</label>
              <input type="text" class="form-control" id="last-name">
            </div>
            <div class="form-group switch">
                <input type="checkbox" id="switch" class="form-control switch__input">
                <label for="switch" class="col-form-label switch__label">Status</label>
            </div>
            <div class="form-group">
                <label for="select-role" class="col-form-label">Role:</label>
                <select id="select-role" class="form-control">
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
            </div>
            <span id="user-form-modal-error-message"></span>            
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary save-user">Save</button>
        </div>
      </div>
    </div>
</div>