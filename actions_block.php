<div class="row mt-3">
    <div class="col-md-12">
        <div class="d-flex align-items-center">
            <button class="btn btn-primary" type="button" data-toggle="modal" data-target="<?php include 'user_form_modal.php' ?>" >Add</button>
            <select class="form-select me-3 mx-3" aria-label="Select">
                <option selected>-Please Select-</option>
                <option>Set active</option>
                <option>Set not active</option>
                <option>Delete</option>
            </select>
            <button onclick="actionsBlockClick(event)" class="btn btn-primary ms-3" type="button">OK</button>
            <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#user-form-modal" >Add</button>

        </div>
    </div>
</div>
